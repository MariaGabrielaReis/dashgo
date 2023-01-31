import { Stack } from "@chakra-ui/react";
import { GitMerge, PresentationChart, Table, UserList } from "phosphor-react";

import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing={"12"} align={"flex-start"}>
      <NavSection title={"GERAL"}>
        <NavLink
          icon={PresentationChart}
          label={"Dashboard"}
          href={"/dashboard"}
        />
        <NavLink icon={UserList} label={"Usuários"} href={"/users"} />
      </NavSection>

      <NavSection title={"AUTOMAÇÃO"}>
        <NavLink icon={Table} label={"Formulários"} href={"/forms"} />
        <NavLink icon={GitMerge} label={"Automação"} href={"/automation"} />
      </NavSection>
    </Stack>
  );
}
