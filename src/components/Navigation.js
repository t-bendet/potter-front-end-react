import React from "react";
import UserStatusBtn from "./UserStatusBtn";
import { Image, Menu } from "semantic-ui-react";
import { me } from "../images";

const NavBarDesktop = ({ leftItems }) => {
  return (
    <Menu stackable={true} inverted>
      <Menu.Item>
        <Image size="mini" src={me} />
      </Menu.Item>

      {leftItems.map((item) => (
        <Menu.Item {...item} />
      ))}

      <Menu.Menu position="right" style={{ marginRight: "1rem" }}>
        <UserStatusBtn />
      </Menu.Menu>
    </Menu>
  );
};

class NavBar extends React.Component {
  render() {
    const { leftItems } = this.props;

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

const Navigation = () => (
  <>
    <NavBar leftItems={leftItems} />
  </>
);

export default Navigation;
