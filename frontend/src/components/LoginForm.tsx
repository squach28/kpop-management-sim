import { Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react"
import { useState } from "react"

const LoginForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <Flex
      direction="column"
      borderColor="gray"
      boxShadow="xl"
      rounded="md"
      gap={6}
      p={8}
    >
      <Text fontSize="x-large" fontWeight={500}>Login</Text>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={onEmailChange} placeholder="Email" />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={onPasswordChange} placeholder="Password" />
      </FormControl>
      <Button colorScheme="blue">Login</Button>
    </Flex>
  )
}

export default LoginForm