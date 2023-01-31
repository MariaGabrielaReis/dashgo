import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBar } from "./SearchBar";

export function Header() {
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

      <SearchBar />

      <Flex align={"center"} ml={"auto"}>
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
