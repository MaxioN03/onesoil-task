import '../src/index.css';
import '../src/styles/variables.css';
import '../src/fonts/stylesheet.css';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};