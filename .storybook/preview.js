import { ThemeProvider } from '@emotion/react';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';

import { lightTheme, darkTheme } from '../src/theme';
import ResetCss from '../src/theme/ResetCSS';

const globalDecorator = StoryFn => (
  <>
    <ResetCss />
    <StoryFn />
  </>
);

// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(ThemeProvider, [lightTheme, darkTheme]));
addDecorator(globalDecorator);
