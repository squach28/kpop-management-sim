import { Flex, Text } from "@chakra-ui/react"
import LoginForm from "../components/LoginForm"

const Login = () => {
  return (
    <Flex
      direction="column"
    >
      <Text fontSize="large">Home</Text>
      <Flex
        justifyContent="center"
        justifyItems="center"
        mt={24}
      >
        <LoginForm />
      </Flex>
    </Flex>
  )
}

export default Login