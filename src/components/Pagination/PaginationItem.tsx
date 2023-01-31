import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  isCurrent = false,
  number,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
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
        {number}
      </Button>
    );
  }
  return (
    <Button
      size={"sm"}
      fontSize={"xs"}
      w={"4"}
      variant={"ghost"}
      color={"teal.500"}
      _hover={{ bg: "teal.700", color: "white" }}
    >
      {number}
    </Button>
  );
}
