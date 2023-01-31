import { useSidebarDrawer } from "@/contexts/SidebarDrawerContext";
import { Flex, IconButton, Icon, useBreakpointValue } from "@chakra-ui/react";
import { List } from "phosphor-react";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isMiddleVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      as="header"
      w={"100%"}
      maxW={1480}
      h={"20"}
      mx={"auto"}
      mt={[0, 0, "4"]}
      px={"6"}
      align={["flex-end", "flex-end", "center"]}
    >
      {!isWideVersion && !isMiddleVersion && (
        <IconButton
          aria-label="Abre navegação"
          icon={<Icon as={List} />}
          fontSize={"28"}
          margin={0}
          variant={"unstyled"}
          onClick={onOpen}
          mr={"2"}
        />
      )}
      <Logo />

      {isMiddleVersion && <SearchBar />}

      <Flex align={"center"} ml={"auto"}>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
