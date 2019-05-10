import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Navbar color="white" light expand="md" className="navcus">
        <NavbarBrand href="/">
          <h5>TAN HUI TIAN</h5>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://drive.google.com/file/d/1ne3jI6wZzwKp4sRPI7leCLlJ99gO8z9N/view?usp=sharing">
                <h6>Resume</h6>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#projects">
                <h6>Projects</h6>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
