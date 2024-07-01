import { Avatar, Center, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { auth } from "../main";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";

const NavBar = () => {

  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    if(auth.currentUser) {
      setUser(auth.currentUser)
    }
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
