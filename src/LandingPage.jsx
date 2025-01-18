import { Heading, Text, Container, Center, Box, Stack, Button } from '@chakra-ui/react';

export function LandingPage(){
    return(
        <Box 
        bgImg="url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86092a8a-4acf-4f87-b9e7-18724a0b2d37/dbcjao-cc5c110c-43bf-4222-8807-c0c553703ea0.jpg/v1/fill/w_1414,h_565,q_70,strp/horizon___widescreen_wallpaper_by_hameed_dbcjao-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzg2MDkyYThhLTRhY2YtNGY4Ny1iOWU3LTE4NzI0YTBiMmQzN1wvZGJjamFvLWNjNWMxMTBjLTQzYmYtNDIyMi04ODA3LWMwYzU1MzcwM2VhMC5qcGciLCJ3aWR0aCI6Ijw9MjU2MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.3SozakDCyAzF4SF_If4lgBRsT3MW7cxMdLnRgwDd7Dc)"            
        bgRepeat='no-repeat'
        display='flex'
        >
            <Container>
                <Center>
                    <Heading>tOKtIK</Heading>
                </Center>
                <Stack>
                    <Heading as='md'>Check Us Out</Heading>
                    <Text>Lots of Entertaining Content</Text>
                    <Button>
                        Click Me!
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}
