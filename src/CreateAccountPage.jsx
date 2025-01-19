import { Box, Text, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

export function CreateAccountPage() {
    const onSubmit = () => {
        console.log('test')
    }
    return (<Box display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bg="gray.100" >
        <Box>
            <Heading>Create Account for TokTik</Heading>
            <form onSubmit={onSubmit}>
                <FormControl mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Username</FormLabel>
                    <Input type="email" placeholder="Enter your username" />
                </FormControl>
                <FormControl mb={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your password" />
                </FormControl>
                <Button colorScheme="blue" width="100%" type="submit">
                    Create Account
                </Button>
            </form>
        </Box>
    </Box>)
}