import { mergeConfig } from "vite";
import wyw from "@wyw-in-js/vite";
import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        wyw({
          include: ["**/*.{js,jsx,ts,tsx}"],
          babelOptions: {
            presets: ["@babel/preset-react", "@babel/preset-typescript"],
          },
        }),
      ],
    });
  },
};
export default config;
