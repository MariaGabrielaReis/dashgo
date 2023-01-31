import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl,
  Heading,
} from "@chakra-ui/react";

export default function Home() {
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
          <FormControl>
            <FormLabel htmlFor="email" fontWeight={"regular"}>
              E-mail
            </FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              focusBorderColor={"teal.500"}
              bg={"gray.800"}
              variant={"filled"}
              _hover={{
                bg: "gray.800",
              }}
              size={"lg"}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password" fontWeight={"regular"}>
              Senha
            </FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              focusBorderColor={"teal.500"}
              bg={"gray.800"}
              variant={"filled"}
              _hover={{
                bg: "gray.800",
              }}
              size={"lg"}
            />
          </FormControl>
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
