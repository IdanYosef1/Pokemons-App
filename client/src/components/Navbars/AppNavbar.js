import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <Navbar className="navbar" bg="primary" variant="dark">
      <Container>
        <Nav className="nav">
          <Link to="/" className="nav-links">
            HOME
          </Link>
          <div className="verticalLine"></div>
          <Link to="/AddPokemon" className="nav-links">
            ADD
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
