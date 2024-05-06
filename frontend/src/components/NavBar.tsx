import { Avatar, Center, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex
      bg="#353535"
      color="white"
      p={4}
      gap={4}
      boxShadow="md"
      fontWeight="bold"
    >
      <Center>
        <Link to="/">Home</Link>
      </Center>
      <Center ml="auto">
        <Avatar size="sm" />
      </Center>
    </Flex>
  );
};

export default NavBar;
