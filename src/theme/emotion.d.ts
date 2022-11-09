import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      error: string;
      warning: string;
    };
  }
}

// You are also able to use a 3rd party theme this way:
// import '@emotion/react';
// import { LibTheme } from 'some-lib';

// declare module '@emotion/react' {
//   export interface Theme extends LibTheme {}
// }
