import React from 'react';
import Link from 'next/link';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 50,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

export default function DenseAppBar() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={classes.root}>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={toggleDrawer} />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Example
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor={'left'} open={isOpen} onClose={toggleDrawer}>
        <div
          style={{
            width: 250,
          }}
        >
          <List>
            <ListItem button key={1}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </ListItemText>
            </ListItem>
            <ListItem button key={2}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText>
                <Link href="/other">
                  <a>Other</a>
                </Link>
              </ListItemText>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key={3}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText>Test</ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </header>
  );
}
