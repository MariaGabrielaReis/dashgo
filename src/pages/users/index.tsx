import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { PencilSimple, Plus } from "phosphor-react";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Pagination } from "@/components/Pagination";

import { User, useUsers } from "@/services/hooks/useUsers";
import { queryClient } from "@/services/queryClient";
import { api } from "@/services/api";

export default function UserList() {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isFetching, error } = useUsers(currentPage);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ["user", userId],
      async () => {
        const { data } = await api.get(`/users/${userId}`);

        return data;
      },
      {
        staleTime: 1000 * 60 * 10, //10 minutes
      },
    );
  }

  return (
    <Box>
      <Header />

      <Flex w={"100%"} my={"6"} maxW={1480} mx={"auto"} px={"6"}>
        <Sidebar />

        <Box flex={"1"} borderRadius={8} bg={"gray.900"} p={"8"}>
          <Flex mb={"8"} justify={"space-between"} align={"center"}>
            <Heading size={"lg"} fontWeight={"normal"}>
              Usuários
              {!isLoading && isFetching && (
                <Spinner size={"sm"} color={"gray.500"} ml={"4"} />
              )}
            </Heading>

            <Button
              as={NextLink}
              href={"/users/create"}
              passHref
              size={"md"}
              fontSize={"md"}
              colorScheme={"teal"}
              leftIcon={<Icon as={Plus} size={24} />}
              cursor={"pointer"}
            >
              Criar novo
            </Button>
          </Flex>

          {isLoading ? (
            <Flex justify={"center"}>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify={"center"}>
              <Text>Falha ao obter lista de usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme={"whiteAlpha"}>
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color={"gray.300"} width={"8"}>
                      <Checkbox colorScheme={"blue"} size={"lg"} />
                    </Th>
                    <Th color={"gray.500"}>Usuário</Th>
                    {isWideVersion && (
                      <Th color={"gray.500"}>Data de cadastro</Th>
                    )}
                    <Th w={"8"} />
                  </Tr>
                </Thead>
                <Tbody>
                  {data?.users?.map((user: User) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme={"blue"} size={"lg"} />
                        </Td>
                        <Td px={"6"}>
                          <Box>
                            <Link
                              color={"teal.500"}
                              onMouseEnter={() => handlePrefetchUser(user.id)}
                            >
                              <Text fontWeight={"bold"}>{user.name}</Text>
                            </Link>
                            <Text fontSize={"sm"} color={"gray.400"}>
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && (
                          <Td px={"6"}>
                            <Text>{user.createdAt}</Text>
                          </Td>
                        )}
                        {isWideVersion && (
                          <Td>
                            <Button
                              as="a"
                              size={"md"}
                              fontSize={"md"}
                              colorScheme={"teal"}
                              leftIcon={<Icon as={PencilSimple} />}
                              variant={"outline"}
                              _hover={{
                                bg: "transparent",
                                color: "teal.500",
                                borderColor: "teal.500",
                              }}
                              cursor={"pointer"}
                            >
                              Editar
                            </Button>
                          </Td>
                        )}
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={data?.totalCount}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
