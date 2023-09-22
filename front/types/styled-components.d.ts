import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      backgroundContent: string;
      
      primary: string;
      primaryLight: string;
      primaryDark: string;

      secondary: string;
      secondaryLight: string;
      secondaryDark: string;

      textPrimary: '#333333',
      textSecondary: '#e9ecef',
      textDark: '#000000',

      success: string;
      danger: string;
      warning: string;
    };
    font: {
      family: string
      light: number
      normal: number
      bold: number
      sizes: {
        small: string
        normal: string
        large: string
        xlarge: string
        xxlarge: string
      }
    }
  }
}
