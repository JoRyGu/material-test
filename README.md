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

#### Custom Styling
1. Add in a CSS module to the same folder of the component you're trying to style. You can make the CSS file a module by naming it `[yourFileNameHere].module.css`. You can write this file just like a standard CSS file. If you want to make several variants for a particular element, just create separate classes in this file.

```CSS
.button {
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  color: white;
  height: 48px;
  padding: 0 30px;
}
```
2. Import the CSS module and assign it to a variable (I name the variable `styles` in this file, but it can literally be whatever). Whichever element you want to give a custom style to, pass the corresponding style to the `className` prop of that element. In this case, we gave the class in our CSS file the name "button", so you'll pass `styles.button`.

```JavaScript
import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './ButtonStyles.module.css';

function MyButton() {
  return (
    <>
      <Button color='primary' variant='contained' className={styles.button}>Hello World</Button>
      <Button color='primary' variant='contained'>Hello World</Button>
    </>
  );
}

export default MyButton;
```

The best part about this solution is that if you don't pass a `className` prop to the Material UI component, it will just take the custom theme's styles. If you add the `className` prop, it only overrides the properties that you specify and keeps the rest of the default theming. This should let us take full advantage of everything Material offers and still customize things where we want.
