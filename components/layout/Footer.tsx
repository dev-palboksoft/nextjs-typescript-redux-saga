import React, { ReactNode } from 'react';
import Link from 'next/link';

import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

const Footer = () => {
  return (
    <footer style={{padding: 20}}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <MuiLink color="inherit" href="https://material-ui.com/">
          Your Website
        </MuiLink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </footer>
  )
}

export default Footer;