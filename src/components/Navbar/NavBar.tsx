import { Container, Link } from '@mui/material';
import  { Section }  from '..';

const NavBarSection = () => {
    return (
        <Section dataSection="navbar">
            <Container maxWidth = "md" sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',}}>
                <Container>Logo</Container>
                
               
                {/* Menú de navegación */}
                <Container
                sx={{
                    display: 'flex',
                    gap: 2,
                    flex: 2,
                    justifyContent: 'flex-end',
                }}
                >
                <Link href="#home" underline="none" color="inherit">
                    Home
                </Link>
                <Link href="#about" underline="none" color="inherit">
                    About
                </Link>
                <Link href="#clothes" underline="none" color="inherit">
                    Clothes
                </Link>
                <Link href="#ubication" underline="none" color="inherit">
                    Ubication
                </Link>
                <Link href="#contact" underline="none" color="inherit">
                    Contact
                </Link>
                </Container>
            </Container>
        </Section>
    );
}

export default NavBarSection;