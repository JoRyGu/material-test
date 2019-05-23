import React from 'react';
import Button from '@material-ui/core/Button';
import { withTheme } from '@material-ui/core/styles';
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