import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Navbar bg="primary" variant="navbar navbar-dark bg-dark" expand="lg" className="mt-4 mb-4 rounded">
            <Navbar.Brand>Blog.app</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            </Nav>
            </Navbar>
        </div>
    );
};

export default NavBar;