import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align={"center"}>
      <Box mr={"4"} textAlign={"right"}>
        <Text>Maria Gabriela Reis</Text>
        <Text color={"gray.400"} fontSize={"sm"}>
          mariagabrielagreis@gmail.com
        </Text>
      </Box>
      <Avatar
        size={"md"}
        name={"Maria Gabriela Reis"}
        src="https://github.com/mariagabrielareis.png"
      />
    </Flex>
  );
}
