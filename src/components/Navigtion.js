import React from "react";
import { Link } from "react-router-dom";
import UserStatusBtn from "./UserStatusBtn";
import { createMedia } from "@artsy/fresnel";
import { Container, Icon, Image, Menu, Sidebar } from "semantic-ui-react";
import { render } from "react-dom";
import HP1 from "../imagesTesting/HP1.jpg";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1200,
  },
});
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

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
    <style>{mediaStyles}</style>

    <MediaContextProvider>
      <NavBar leftItems={leftItems} rightItems={rightItems} />
    </MediaContextProvider>
  </>
);

export default Navigtion;
