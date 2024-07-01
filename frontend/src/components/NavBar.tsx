import { Avatar, Center, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { auth } from "../main";
import { useEffect, useState } from "react";

const NavBar = () => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    console.log(auth.currentUser)
  }, [])

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
      {
        user ?       
        <Center ml="auto">
          <Avatar size="sm" />
        </Center> : 
        <Center ml="auto">
          <Link to="/login">Log in</Link>
        </Center>
      }
    </Flex>
  );
};

export default NavBar;
