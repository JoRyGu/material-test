## Resources
- Material UI Theming: https://material-ui.com/customization/themes/
- CSS Modules: https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet

#### Current Issue
We need to find a way to easily theme the site with reasonable defaults to provide a consistent UI while still maintaining the flexibility to customize default Material UI components to fit the needs of the site.

#### Potential Solution
Mixing Material UI's theme provider with CSS modules. This provides us with consistent theming as well as the ability to create modular CSS classes for those elements without having to worry about having class name collisions.

## How it Works
#### Theming
