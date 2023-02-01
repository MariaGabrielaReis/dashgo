import { useState } from "react";
import { Flex, Icon, Input } from "@chakra-ui/react";
import { MagnifyingGlass } from "phosphor-react";

export function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <Flex
      as="label"
      flex={"1"}
      py={"4"}
      px={"8"}
      ml={"6"}
      maxW={400}
      alignSelf={"center"}
      color={"gray.200"}
      position={"relative"}
      bg={"gray.800"}
      borderRadius={"full"}
    >
      <Input
        variant={"unstyled"}
        color={"gray.50"}
        px={"4"}
        mr={"4"}
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
        onChange={event => setSearch(event.target.value)}
      />
      <Icon as={MagnifyingGlass} fontSize={"20"} />
    </Flex>
  );
}
