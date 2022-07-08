import { createTheme } from '@mui/material/styles'
import { /* green, */ orange /* cyan */ } from '@mui/material/colors'

const TEST_COLOR_KEY = 500

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: cyan[TEST_COLOR_KEY],
  //   },
  //   secondary: {
  //     main: green[TEST_COLOR_KEY],
  //   },
  // },
  status: {
    danger: orange[TEST_COLOR_KEY],
  },
})
