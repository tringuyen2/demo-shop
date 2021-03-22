import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/Cart";

const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to="/home">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/products">Products</Link>
              </NavLink>
              <NavLink>
                <CartContext.Consumer>
                  {({ cartItems }) => (
                    <Link to="/products">Cart ({cartItems.length})</Link>
                  )}
                </CartContext.Consumer>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default TopMenu;
