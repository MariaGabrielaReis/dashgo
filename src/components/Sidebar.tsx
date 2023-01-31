import { Text, Box, Stack, Link, Icon } from "@chakra-ui/react";
import { GitMerge, PresentationChart, Table, UserList } from "phosphor-react";

export function Sidebar() {
  return (
    <Box as="aside" w={"64"} mr={"8"}>
      <Stack spacing={"12"} align={"flex-start"}>
        <Box>
          <Text fontWeight={"bold"} color={"gray.400"} fontSize={"sm"}>
            GERAL
          </Text>
          <Stack spacing={"4"} mt={"8"} align={"stretch"}>
            <Link display={"flex"} alignItems={"center"}>
              <Icon as={PresentationChart} fontSize={"24"} />
              <Text ml={"4"} fontWeight={"medium"}>
                Dashboard
              </Text>
            </Link>
            <Link display={"flex"} alignItems={"center"}>
              <Icon as={UserList} fontSize={"24"} />
              <Text ml={"4"} fontWeight={"medium"}>
                Usuários
              </Text>
            </Link>
          </Stack>
        </Box>

        <Box>
          <Text fontWeight={"bold"} color={"gray.400"} fontSize={"sm"}>
            AUTOMAÇÃO
          </Text>
          <Stack spacing={"4"} mt={"8"} align={"stretch"}>
            <Link display={"flex"} alignItems={"center"}>
              <Icon as={Table} fontSize={"24"} />
              <Text ml={"4"} fontWeight={"medium"}>
                Formulários
              </Text>
            </Link>
            <Link display={"flex"} alignItems={"center"}>
              <Icon as={GitMerge} fontSize={"24"} />
              <Text ml={"4"} fontWeight={"medium"}>
                Automação
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
