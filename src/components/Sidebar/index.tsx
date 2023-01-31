import { Text, Box, Stack, Link, Icon } from "@chakra-ui/react";
import { GitMerge, PresentationChart, Table, UserList } from "phosphor-react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
  return (
    <Box as="aside" w={"64"} mr={"8"}>
      <Stack spacing={"12"} align={"flex-start"}>
        <NavSection title={"GERAL"}>
          <NavLink icon={PresentationChart} label={"Dashboard"} />
          <NavLink icon={UserList} label={"Usuários"} />
        </NavSection>

        <NavSection title={"AUTOMAÇÃO"}>
          <NavLink icon={Table} label={"Formulários"} />
          <NavLink icon={GitMerge} label={"Automação"} />
        </NavSection>
      </Stack>
    </Box>
  );
}
