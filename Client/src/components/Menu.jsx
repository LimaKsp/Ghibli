import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'


function Menu() {

    return (<Navbar collapseOnSelect expand="md"  variant="dark" fixed="top" position="fixed-top" display="block">
        <Container>
            <LinkContainer to="/">
                <Navbar.Brand>Ghibli Archive</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/sobre">
                        <Nav.Link>Artworks</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/funcionalidades">
                        <Nav.Link>Catálogo</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/contato">
                        <Nav.Link>Sugestões</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Menu;

