import { Container, Heading } from "@chakra-ui/react"
import NavBar from "../components/NavBar"

export function NoPage() {
    return(
        <>
            <NavBar />
            <Container>
                <Heading marginTop="30%">Error 404: Page Not Found</Heading>
            </Container>
        </>
    )
}