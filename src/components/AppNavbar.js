import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import "./AppNavbar.css";
import { ReactComponent as Logo } from "../logo.svg";

function AppNavbar() {
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="md"
      classname="navbar navbar-expand-lg fixed-top h-center nav-width"
      style={{
        backgroundColor: "var(--color-primary-white)",
      }}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Logo className="logo" style={{ height: 80 }} />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <>
              <LinkContainer to="/">
                <Nav.Link className="nav-link">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/programs">
                <Nav.Link className="nav-link">Programs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/calendar">
                <Nav.Link className="nav-link">Event Calendar</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/newsletter">
                <Nav.Link className="nav-link">Newsletter</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/our-team">
                <Nav.Link className="nav-link">Our Team</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/support-us">
                <Nav.Link className="nav-link">Support Us</Nav.Link>
              </LinkContainer>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
