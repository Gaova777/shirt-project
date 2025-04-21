import { Container } from "@mui/material"
import Section from "../Section";



const Home: React.FC = () => {
    return (
        <Section dataSection="home" sx={{display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Container>
                14th Key
            </Container>
            <Container>
                <img src="" alt="" />
            </Container>

        </Section>
    );
};

export default Home;