import type { Preview } from "@storybook/react";
import '../app/globals.css'

import * as NextLink from 'next/link';

const OriginalLink = NextLink.default;

Object.defineProperty(NextLink, 'default', {
  configurable: true,
  value: (props) => (<OriginalLink {...props}><a {...props}>{props.children}</a></OriginalLink>),
})

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
      router: {
        push(...args) {
          // Custom logic can go here
          // This logs to the Actions panel
          action('nextRouter.push')(...args);
          // Return whatever you want here
          return Promise.resolve(true);
        },
      }
    }
  },
};

export default preview;
