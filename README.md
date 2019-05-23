## Resources
- Material UI Theming: https://material-ui.com/customization/themes/
- CSS Modules: https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet

#### Current Issue
We need to find a way to easily theme the site with reasonable defaults to provide a consistent UI while still maintaining the flexibility to customize default Material UI components to fit the needs of the site.

#### Potential Solution
Mixing Material UI's theme provider with CSS modules. This provides us with consistent theming as well as the ability to create modular CSS classes for those elements without having to worry about having class name collisions.

## How it Works
#### Theming
1. Create a theme. In this demo the created theme is located in the root as `MyMuiTheme.js`, but you're able to place it wherever makes the most sense for the app. This is done by importing Material UI's `createMuiTheme`, assigning it to a variable, and passing it an options object.

```JavaScript
import { createMuiTheme } from '@material-ui/core/styles';
import { red, yellow, purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: red,
    error: yellow,
  }
});

export default theme;
```

2. Wrap the app with Material UI's `MuiThemeProvider` and pass it the created theme. This should automatically pass the custom theme down to the rest of the project's components. If for whatever reason it's not working automatically we can use the `withTheme` higher order component, but in the limited testing I did the theme was being passed down without it.

```JavaScript
import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from './MyMuiTheme';
import MyButton from './components/Button/Button';

function App() {
  return (
    <MuiThemeProvider theme={ theme }>
      <MyButton />
    </MuiThemeProvider>
  );
}

export default App;
```
