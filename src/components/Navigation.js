import React from "react";
import UserStatusBtn from "./UserStatusBtn";
import { Container, Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import HP1 from "../images/HP1.jpg";

const NavBarDesktop = ({ leftItems }) => {
  return (
    <Menu stackable={true} inverted>
      <Menu.Item>
        <Image size="mini" src={HP1} />
      </Menu.Item>

      {leftItems.map((item) => (
        <Menu.Item {...item} />
      ))}

      <Menu.Menu position="right">
        <UserStatusBtn />
      </Menu.Menu>
    </Menu>
  );
};

class NavBar extends React.Component {
  render() {
    const { children, leftItems } = this.props;

    return (
      <div>
        <NavBarDesktop leftItems={leftItems} />
      </div>
    );
  }
}

const leftItems = [
  { as: "a", content: "Home", key: "home", href: "/" },
  { as: "a", content: "Books", key: "books", href: "/books" },
  { as: "a", content: "Movies", key: "movies", href: "/movies" },
  { as: "a", content: "Potter Api", key: "potter-Api", href: "/potter-Api" },
  { as: "a", content: "Fans Art", key: "fans-art", href: "/fans-art" },
];
const rightItems = [
  { as: "a", content: "UserStatusBtn", key: "UserStatusBtn" },
];

const Navigation = () => (
  <>
    <NavBar leftItems={leftItems} />
  </>
);

export default Navigation;
