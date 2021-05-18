import React from "react";
import { Container, Icon, Image, Menu, Sidebar } from "semantic-ui-react";

import { Media } from "../utils/mediaTest";

const Home = () => {
  return (
    <>
      <Media at="mobile">
        <h2>ss</h2>
      </Media>

      <Media greaterThan="mobile">
        <h2>sssssssssssssssssssssssssssssssssssssssssssssssssss</h2>
      </Media>
    </>
  );
};

export default Home;
