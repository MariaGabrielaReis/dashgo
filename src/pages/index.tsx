import { Input } from "@/components/Form/Input";
import { Flex, Button, Stack, Heading } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Flex w={"100vw"} h={"100vh"} align={"center"} justify={"center"}>
      <Flex
        as="form"
        w={"100%"}
        maxW={360}
        bg={"gray.900"}
        p={8}
        borderRadius={8}
        flexDirection={"column"}
      >
        <Stack spacing={4} align={"center"}>
          <Heading size={"lg"}>Bem vindo(a)!</Heading>
          <Input name={"email"} type="email" label={"E-mail"} />
          <Input name={"password"} type="password" label={"Senha"} />
        </Stack>

        <Button
          type="submit"
          mt={6}
          colorScheme={"teal"}
          size={"lg"}
          fontWeight={"medium"}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
