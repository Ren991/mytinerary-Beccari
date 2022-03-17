import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/styles.css";
import userActions from "../redux/actions/userActions";
import { connect } from "react-redux";


const settings = ["Profile", "Account", "Dashboard", "Logout"];

const BarButtons = (props) => {
  console.log(props);
  function SignOut() {
    props.signOutUser(props.user.email);
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" className="navBar">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            MyTinerary
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <LinkRouter to="/" className="responsiveButton">
                  Home
                </LinkRouter>
              </MenuItem>

              <MenuItem>
                <LinkRouter to="/cities" className="responsiveButton">
                  cities
                </LinkRouter>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            MyTinerary
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <LinkRouter to="/">
              <MenuItem>
                <Button className="link">Home</Button>
              </MenuItem>
            </LinkRouter>

            <LinkRouter to="cities">
              <MenuItem>
                <Button className="link">Cities</Button>
              </MenuItem>
            </LinkRouter>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
         
            <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                
            {props.user ? (
        <>
        <img className="photoUser" alt="Photo User" src={props.user.photo}/> 
       </>  
      ) : (
       
        
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> 
       
      
      
      )}
                
                
                
                
               
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: "50px" , }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              className="buttonProfile"
            >
          
          
             {props.user ? (
        <div>
           <h3 className="welcome">
            Welcome {props.user.name} 
          </h3> *
          <div
            style={{ display: "column", justifyContent: "center", width: "100%" }}
          >
            
             
             <LinkRouter to="/">
            <button
              onClick={SignOut}
              className="btn btn-primary btn-block"
              style={{ maxWidth: 400 }}
            >
              {" "}
              SignOut{" "}
            </button>
            </LinkRouter>
          
          
          </div>
        </div>
      ) : (
        <div >
        <h2 className="noUser">No user connected</h2>  
      
       <LinkRouter to="/signIn">
        <button  className="btnIn btn-primary  btn-block"
              style={{ maxWidth: 100 , marginBottom: 20}}
            >Sign In</button>
      </LinkRouter>
      
      <LinkRouter to="/signUp">
        <button  className="btnIn btn-primary btn-block"
              style={{ maxWidth: 100 }}>Sign Up</button>
      </LinkRouter>
     
      </div> 
      
      
      )}
       
           
            </Menu>
         
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userR.user,
  };
};
const mapDispatchToProps = {
  signOutUser: userActions.signOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(BarButtons);
