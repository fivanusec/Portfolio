import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Welcome to my portfolio",
      bg: "transparent",
      variant: "light",
      style: {
        color: "#1479FF",
      },
    };
  }
  handleScroll = () => {
    if (window.scrollY === 0) {
      this.setState({
        brand: "Welcome to my portfolio",
        bg: "transparent",
        variant: "light",
        style: {
          color: "#1479FF",
        },
      });
    } else if (window.scrollY > 0) {
      this.setState({
        brand: "Filip Ivanusec",
        bg: "light",
        variant: "light",
        style: {
          color: "#1479FF",
          borderColor: "#1479FF",
        },
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    return (
      <Navbar
        fixed="top"
        bg={this.props.bg ? this.props.bg : this.state.bg}
        variant={this.state.variant}
        expand="md"
      >
        <Navbar.Brand style={this.state.style} href="#home">
          {this.state.brand}
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              style={{ marginLeft: "auto" }}
              activeKey={window.location.pathname}
            >
              <Nav.Link style={this.state.style} href="#home">
                Home
              </Nav.Link>
              <Nav.Link style={this.state.style} href="#aboutme">
                About me
              </Nav.Link>
              <Nav.Link style={this.state.style} href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link style={this.state.style} href="#photography">
                Photography
              </Nav.Link>
              <Nav.Link style={this.state.style} href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
