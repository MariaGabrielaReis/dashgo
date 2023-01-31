import { Button, HStack, Text } from "@chakra-ui/react";

export function Pagination() {
  return (
    <HStack mt={"8"} justify={"space-between"} align={"center"} spacing={"6"}>
      <Text>
        <strong>0</strong> - <strong>10</strong> de 100
      </Text>
      <HStack spacing={"2"}>
        <Button
          size={"sm"}
          fontSize={"xs"}
          w={"4"}
          disabled
          cursor={"default"}
          color={"white"}
          bg={"teal.600"}
          _hover={{ bg: "teal.600", color: "white" }}
        >
          1
        </Button>
        <Button
          size={"sm"}
          fontSize={"xs"}
          w={"4"}
          variant={"ghost"}
          color={"teal.500"}
          _hover={{ bg: "teal.700", color: "white" }}
        >
          2
        </Button>
        <Button
          size={"sm"}
          fontSize={"xs"}
          w={"4"}
          variant={"ghost"}
          color={"teal.500"}
          _hover={{ bg: "teal.700", color: "white" }}
        >
          3
        </Button>
        <Button
          size={"sm"}
          fontSize={"xs"}
          w={"4"}
          variant={"ghost"}
          color={"teal.500"}
          _hover={{ bg: "teal.700", color: "white" }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  );
}
