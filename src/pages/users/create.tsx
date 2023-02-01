import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Input } from "@/components/Form/Input";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Digite o nome"),
  email: yup.string().required("Digite o e-mail").email("E-mail inválido"),
  password: yup
    .string()
    .required("Digite a senha")
    .min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Header />

      <Flex w={"100%"} my={"6"} maxW={1480} mx={"auto"} px={"6"}>
        <Sidebar />

        <Box
          as="form"
          flex={"1"}
          borderRadius={8}
          bg={"gray.900"}
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size={"lg"} fontWeight={"normal"}>
            Criar usuário
          </Heading>
          <Divider my={"6"} borderColor={"gray.700"} />

          <VStack spacing={"8"}>
            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} width={"100%"}>
              <Input
                label={"Nome completo"}
                error={errors.name}
                {...register("name")}
              />
              <Input
                type={"email"}
                label={"E-mail"}
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} width={"100%"}>
              <Input
                type={"password"}
                label={"Senha"}
                error={errors.password}
                {...register("password")}
              />
              <Input
                type={"password"}
                label={"Confirme a senha"}
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={"8"}>
            <HStack
              spacing={"4"}
              width={"100%"}
              justify={["space-between", "flex-end"]}
            >
              <Button
                as={Link}
                href={"/users"}
                passHref
                minW={["45%", 100]}
                bg={"transparent"}
                fontWeight={"medium"}
                _hover={{
                  bg: "gray.700",
                }}
              >
                Cancelar
              </Button>

              <Button
                type={"submit"}
                colorScheme={"teal"}
                minW={["45%", 100]}
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
