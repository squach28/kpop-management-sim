import { Flex, Text } from "@chakra-ui/react"
import LoginForm from "../components/LoginForm"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <Flex
      direction="column"
    >
      <Text fontSize="large">Home</Text>
      <Flex
        direction="column"
        mt={24}
        minWidth="40%"
        mx="auto"
      >
        <LoginForm />
        <Flex
        justifyContent="center"
        gap={2}
        mt={5}
        fontSize="large"
      >
        <Text>Don't have an account?</Text>
        <Link to="/signup">
          <Text as="u">Sign up</Text>
        </Link>
      </Flex>
      </Flex>
    </Flex>
  )
}

export default Login