import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    largeScreen: 1200,
  },
  interactions: {
    hover: "(hover: hover)",
    notHover: "(hover: none)",
    landscape: "not all and (orientation: landscape)",
    portrait: "not all and (orientation: portrait)",
  },
});

export const { Media, MediaContextProvider, createMediaStyle } = AppMedia;
