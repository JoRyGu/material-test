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
