import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PostAddTwoToneIcon from "@mui/icons-material/PostAddTwoTone";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import ExitToAppTwoToneIcon from "@mui/icons-material/ExitToAppTwoTone";
import { useNavigate, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useAuthValue } from "../database/AuthContext";
import "../App.css";
import { Button } from "@mui/material";
let nameOfUser = "";

export const setUsernameCaption = (uname) => {
  nameOfUser = uname;
};
const drawerWidth = 240;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "red",
  },
});

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  let navigate = useNavigate();
  const { currentUser } = useAuthValue();

  const classes = useStyles();
  const [username, setUsername] = useState("");
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ background: "#70aee0", color: "black" }}
        position="fixed"
        open={open}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <div className="header-content-inner">
            <img
              src="6nobgHD.png"
              width="230"
              height="auto"
              id="img"
              style={{ margin: "10px" }}
            />
          </div>

          <Typography
            variant="h6"
            style={{
              position: "absolute",
              right: "15px",
              padding: "7px",
              color: "black",
              textAlign: "right",
            }}
            noWrap
            component="div"
          >
            <AccountCircleOutlinedIcon
              style={{ fontSize: "40px", color: "black" }}
            />{" "}
            {currentUser.email}
            <br></br>
            <Button
              variant="contained"
              size="small"
              sx={{ color: "White", border: "2px solid #82d4e4be" }}
              startIcon={<LogoutRoundedIcon style={{ fontSize: "20px" }} />}
              onClick={() => {
                navigate("/");
              }}
            >
              Log Out
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="/Assessment">
            <ListItem button>
              <ListItemIcon>
                <PostAddTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary={"Start Assessment"} />
            </ListItem>
          </Link>
          <Link to="/">
            <ListItem button>
              <ListItemIcon>
                <ExitToAppTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary={"Log Out"} />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph></Typography>
      </Main>
    </Box>
  );
}
