import type { Preview } from "@storybook/react";
import "../src/css/reset.css";
import "../src/css/vars.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
