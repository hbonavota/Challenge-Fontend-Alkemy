import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import './NavbarHome.css';


function NavbarHome(){

    return (
        <div className="containerBusc">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div>
                </div>
                <Container>
                    <Navbar.Brand href="/">Recetas</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        <Form className="d-flex" onSubmit={(e) => this.handleSubmit(e)}>
                            <FormControl
                                type="search"
                                size="sm"
                                placeholder="Busca tu plato favorito"
                                className="inputForm"
                                aria-label="Search"
                                value={""}
                                onChange={(e) => this.handleChange(e)}
                            />
                        </Form>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/favs">Login</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}


export default NavbarHome;