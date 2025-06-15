import './header.css';
import logoTerracota from '../assets/img/logo_text_white.webp'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Consultations", href: "/consultations" },
    { label: "Soins rituels", href: "/soin-rituels" },
    {
      label: "Autres services",
      href: "",
      children: [
        { label: "Guidances", href: "/guidances" },
        { label: "Cercles et céremonies", href: "/cercles-ceremonies" },
        { label: "Ateliers", href: "/ateliers" },
        { label: "Retraites et transmissions", href: "/retraites-formations" },
      ]
    }
  ];

  const navItemsXs = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Consultations", href: "/consultations" },
    { label: "Soins rituels", href: "/soin-rituels" },
    { label: "Guidances", href: "/guidances" },
    { label: "Cercles et céremonies", href: "/cercles-ceremonies" },
    { label: "Retraites et transmissions", href: "/retraites-formations" },
    { label: "Me contacter", href: "/contact" },
  ];

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
            }}
          >
            <img src={logoTerracota} alt="Logo Claire Aube" className='logo' loading="lazy" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navItemsXs.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={handleCloseNavMenu}
                  component="a"
                  href={item.href}>
                  <Typography sx={{ textAlign: 'center' }}>{item.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 0,
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <img src={logoTerracota} alt="Logo Claire Aube" className='logo' loading="lazy" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              item.children ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <Button
                      key={item.label}
                      onClick={handleOpenUserMenu}
                      sx={{ my: 0, color: 'secondary.main', display: 'block' }}
                    >
                      {item.label}
                    </Button>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {item.children.map((child) => (
                      <MenuItem
                        key={child.label}
                        onClick={handleCloseUserMenu}
                        component="a"
                        href={child.href}
                      >
                        <Typography sx={{ textAlign: 'center' }}>{child.label}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              ) :
                (
                  <Button
                    key={item.label}
                    onClick={handleCloseNavMenu}
                    component="a"
                    href={item.href}
                    sx={{ my:0, color: 'secondary.main', display: 'block' }}
                  >
                    {item.label}
                  </Button>
                )
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex'}}} >
            <Button
              component="a"
              href="/contact"
              sx={{color: "secondary.main"}}
            >
              Me contacter
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
