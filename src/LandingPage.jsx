import { Heading, Text, Container, Center, LinkOverlay, Link, Stack } from '@chakra-ui/react';

export function LandingPage(){
    return(
        <Container>
            <Center>
                <Heading>tOKtIK</Heading>
            </Center>
            <Stack>
                <Heading as='md'>Check Us Out</Heading>
                <Text>Lots of Entertaining Content</Text>
                <LinkOverlay>
                    <Link href='youtube.com'>Click Me!</Link>
                </LinkOverlay>
            </Stack>
        </Container>
    )
}
