import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";

export function Header() {
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
      mt={"4"}
      px={"6"}
      align={"center"}
    >
      <Logo />

      {isMiddleVersion && <SearchBar />}

      <Flex align={"center"} ml={"auto"}>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
