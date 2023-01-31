import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt={"8"}
      justify={"space-between"}
      align={"center"}
      spacing={"6"}
    >
      <Text>
        <strong>0</strong> - <strong>10</strong> de 100
      </Text>
      <HStack spacing={"2"}>
        <PaginationItem number={1} isCurrent={true} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </HStack>
    </Stack>
  );
}
