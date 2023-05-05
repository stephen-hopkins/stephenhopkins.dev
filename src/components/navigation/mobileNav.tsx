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
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setShowDrawer((b) => !b)}
          >
            <MenuIcon />
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
              <div className={styles.first_link}>
                <Link href="/" component={NextLink} variant="body1" onClick={() => setShowDrawer(false)}>
                  Home
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className={styles.link}>
                <Link href="/cv" component={NextLink} variant="body1" onClick={() => setShowDrawer(false)}>
                  CV
                </Link>
              </div>
            </ListItem>
            <ListItem>
              <div className={styles.link}>
                <Link href="/contact" component={NextLink} variant="body1" onClick={() => setShowDrawer(false)}>
                  Contact
                </Link>
              </div>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </Box>
  );
}
