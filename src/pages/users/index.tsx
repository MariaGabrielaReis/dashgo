import {
  background,
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { PencilSimple, Plus } from "phosphor-react";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Pagination } from "@/components/Pagination";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w={"100%"} my={"6"} maxW={1480} mx={"auto"} px={"6"}>
        <Sidebar />

        <Box flex={"1"} borderRadius={8} bg={"gray.800"} p={"8"}>
          <Flex mb={"8"} justify={"space-between"} align={"center"}>
            <Heading size={"lg"} fontWeight={"normal"}>
              Usuários
            </Heading>

            <Button
              as="a"
              size={"md"}
              fontSize={"md"}
              colorScheme={"teal"}
              leftIcon={<Icon as={Plus} size={24} />}
              cursor={"pointer"}
            >
              Criar novo usuário
            </Button>
          </Flex>

          <Table colorScheme={"whiteAlpha"}>
            <Thead>
              <Tr>
                <Th px={"6"} color={"gray.300"} width={"8"}>
                  <Checkbox colorScheme={"blue"} size={"lg"} />
                </Th>
                <Th color={"gray.500"}>Usuário</Th>
                <Th color={"gray.500"}>Data de cadastro</Th>
                <Th w={"8"} />
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={"6"}>
                  <Checkbox colorScheme={"blue"} size={"lg"} />
                </Td>
                <Td px={"6"}>
                  <Box>
                    <Text fontWeight={"bold"}>Maria Gabriela Reis</Text>
                    <Text fontSize={"sm"} color={"gray.400"}>
                      maby@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td px={"6"}>
                  <Text>21 de julho, 2021</Text>
                </Td>
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
              </Tr>
              <Tr>
                <Td px={"6"}>
                  <Checkbox colorScheme={"blue"} size={"lg"} />
                </Td>
                <Td px={"6"}>
                  <Box>
                    <Text fontWeight={"bold"}>Maria Gabriela Reis</Text>
                    <Text fontSize={"sm"} color={"gray.400"}>
                      maby@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td px={"6"}>
                  <Text>21 de julho, 2021</Text>
                </Td>
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
              </Tr>
              <Tr>
                <Td px={"6"}>
                  <Checkbox colorScheme={"blue"} size={"lg"} />
                </Td>
                <Td px={"6"}>
                  <Box>
                    <Text fontWeight={"bold"}>Maria Gabriela Reis</Text>
                    <Text fontSize={"sm"} color={"gray.400"}>
                      maby@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td px={"6"}>
                  <Text>21 de julho, 2021</Text>
                </Td>
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
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
