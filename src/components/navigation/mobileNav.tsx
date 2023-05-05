import { AppBar, Box, Drawer, IconButton, Link, List, ListItem, Toolbar, Typography } from "@mui/material";
import styles from "./navigation.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import NextLink from "next/link";

export default function MobileNav() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <Box className={styles.mobile}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon onClick={() => setShowDrawer((b) => !b)} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ marginLeft: "auto", marginRight: "1rem" }}>
            Stephen Hopkins
          </Typography>
        </Toolbar>
        <Drawer
          anchor="left"
          open={showDrawer}
          onClose={() => {
            setShowDrawer(false);
          }}
        >
          <List>
            <ListItem>
              <Link
                href="/"
                component={NextLink}
                variant="body1"
                className={styles.first_link}
                onClick={() => setShowDrawer(false)}
              >
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/cv"
                component={NextLink}
                variant="body1"
                className={styles.link}
                onClick={() => setShowDrawer(false)}
              >
                CV
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/contact"
                component={NextLink}
                variant="body1"
                className={styles.link}
                onClick={() => setShowDrawer(false)}
              >
                Contact
              </Link>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </Box>
  );
}
