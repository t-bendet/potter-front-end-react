import React from "react";
import UserStatusBtn from "./UserStatusBtn";
import { Container, Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import HP1 from "../imagesTesting/HP1.jpg";

import { Media } from "../utils/mediaTest";

const NavBarMobile = (props) => {
  const { children, leftItems, onPusherClick, onToggle, rightItems, visible } =
    props;

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        items={leftItems}
        vertical
        visible={visible}
      />
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        <Menu fixed="top" inverted>
          <Menu.Item>
            <Image size="mini" src={HP1} />
          </Menu.Item>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          <Menu.Menu position="right">
            <UserStatusBtn />
          </Menu.Menu>
        </Menu>
        {children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

const NavBarDesktop = (props) => {
  const { leftItems, rightItems } = props;

  return (
    <Menu fixed="top" inverted>
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

const NavBarChildren = (props) => (
  <Container style={{ marginTop: "5em" }}>{props.children}</Container>
);

class NavBar extends React.Component {
  state = {
    visible: false,
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;
    console.log(this.state, "state");
    console.log(this.props, "props");

    return (
      <div>
        <Media at="mobile">
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Media>

        <Media greaterThan="mobile">
          <NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
          <NavBarChildren>{children}</NavBarChildren>
        </Media>
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

const Navigtion = () => (
  <>
    <NavBar leftItems={leftItems} rightItems={rightItems} />
  </>
);

export default Navigtion;
