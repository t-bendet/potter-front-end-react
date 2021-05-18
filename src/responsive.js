import React from "react";

import { createMedia } from "@artsy/fresnel";
const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    largeScreen: 1200,
  },
});
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const App = () => {
  return (
    <>
      <style>{mediaStyles}</style>

      <MediaContextProvider>
        <Media at="mobile">
          <h1>Mobile</h1>
        </Media>

        <Media greaterThan="mobile">
          <h1>Not At Mobile</h1>
        </Media>
      </MediaContextProvider>
    </>
  );
};
