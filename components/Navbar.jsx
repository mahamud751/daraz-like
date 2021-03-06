import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { signOut } from "firebase/auth";
import Link from "next/link";
import * as React from "react";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import auth from "../firebase.init";
import { delete_cart } from "../redux/actions/cartAction";

const pages = ["Blog", "Category"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [user] = useAuthState(auth);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://guarded-garden-69209.herokuapp.com/categoryWithProducts")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);
  console.log(category);

  const logout = () => {
    signOut(auth);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [anchorE2, setAnchorE2] = React.useState(null);

  function handleClick1(event) {
    setAnchorE2(event.currentTarget);
  }

  function handleClose1() {
    setAnchorE2(null);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getState = useSelector((state) => state.cartReducer.cart);

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

  const [price, setPrice] = React.useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const total = () => {
    let price = 0;
    getState.map((pd) => {
      price = pd.price * pd.qtn + price;
      setPrice(price);
    });
  };

  React.useEffect(() => {
    total();
  }, [total]);

  const dispatch = useDispatch();

  const handleCart = (_id) => {
    dispatch(delete_cart(_id));
  };
  return (
    <>
      <Box>
        <AppBar position="static" style={{ backgroundColor: "#010101" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link href={"/"}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{

                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Home
                </Typography>
              </Link>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none", marginLeft: -30 } }}>
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
                    display: { xs: "block", md: "none", left: -16 },
                  }}
                >
                  <Link href={"/blog"}>
                    <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "", display: "block" }}>
                      Blog
                    </Button>
                  </Link>

                  <Button aria-owns={anchorE2 ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick1} onMouseEnter={handleClick1}>
                    Category
                  </Button>
                  <Menu id="simple-menu" anchorEl={anchorE2} open={Boolean(anchorE2)} onClose={handleClose1} onMouseLeave={handleClose1}>
                    {category.map((pd, index) => (
                      <Link href="/category/[categoryId]" as={`/category/${pd._id}`} key={index}>
                        <MenuItem onClick={handleClose1} key={index}>
                          {pd.name}
                        </MenuItem>
                      </Link>
                    ))}
                  </Menu>
                </Menu>
              </Box>

              <Link href={"/"}>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  HOME
                </Typography>
              </Link>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", } }}>
                <Link href={"/blog"}>
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: "white", display: "block" }}>
                    Blog
                  </Button>
                </Link>

                <Button aria-owns={anchorE2 ? "simple-menu" : undefined} aria-haspopup="true" onClick={handleClick1} onMouseEnter={handleClick1}>
                  Category
                </Button>
                <Menu id="simple-menu" anchorEl={anchorE2} open={Boolean(anchorE2)} onClose={handleClose1} onMouseLeave={handleClose1}>
                  {category.map((pd, index) => (
                    <Link href="/category/[categoryId]" as={`/category/${pd._id}`} key={index}>
                      <MenuItem onClick={handleClose1} key={index} style={{ marginLeft: 0 }}>
                        {pd.name}
                      </MenuItem>
                    </Link>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ flexGrow: 0, }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, }}></IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px", }}
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
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
                <Badge
                  badgeContent={getState.length}
                  color="primary"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <ShoppingCartIcon />
                </Badge>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {getState.length ? (
                    <div style={{ width: "300px" }}>
                      {getState.map((pd, index) => {
                        return (
                          <div className="d-flex justify-content-between p-3" key={index}>
                            <img src={pd.img} alt="" style={{ width: "5rem", height: "5rem" }} key={pd._id} />
                            <div>
                              <p>{pd.name}</p>
                              <p>{pd.qtn}</p>
                            </div>
                            <DeleteIcon onClick={() => handleCart(pd._id)} />
                          </div>
                        );
                      })}
                      <p>Total:{price}</p>
                      {user ? (
                        <Link href={"/checkout"}>
                          <Button variant="contained" color="primary" fullWidth>
                            Checkout
                          </Button>
                        </Link>
                      ) : (
                        <Link href={"/login"}>
                          <Button variant="contained" color="primary" fullWidth>
                            Checkout
                          </Button>
                        </Link>
                      )}
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <p style={{ fontSize: 22, padding: 10 }}>Your carts is empty</p>
                    </div>
                  )}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}></IconButton>
                </Tooltip>
                {user ? (
                  <>
                    <Button sx={{ marginLeft: 5 }}>
                      <Typography color="white">{user.displayName}</Typography>
                    </Button>
                    <Button variant="contained" color="primary" onClick={logout} sx={{ mx: 3 }}>
                      Sing Out
                    </Button>
                  </>
                ) : (
                  <Link href={"/login"}>
                    <Button variant="contained" color="primary" sx={{ mx: 3 }}>
                      Sing In
                    </Button>
                  </Link>
                )}

                <Menu
                  sx={{ mt: "45px" }}
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
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
