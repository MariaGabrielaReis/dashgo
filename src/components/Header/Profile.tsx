import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align={"center"}>
      {showProfileData && (
        <Box mr={"4"} textAlign={"right"}>
          <Text>Maria Gabriela Reis</Text>
          <Text color={"gray.400"} fontSize={"sm"}>
            mariagabrielagreis@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size={"md"}
        name={"Maria Gabriela Reis"}
        src="https://github.com/mariagabrielareis.png"
      />
    </Flex>
  );
}
