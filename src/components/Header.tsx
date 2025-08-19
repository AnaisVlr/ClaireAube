import logo from '../assets/img/logo/logo_terracota.webp'
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
import MenuItem from '@mui/material/MenuItem';
import { useTexts } from '../hooks/useTexts';


export const Header = () => {
  const t = useTexts();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navItems = [
    { label: t.homePage.homePage, href: "/" },
    { label: t.aboutMe.aboutMe, href: "/about" },
    { label: t.consults.consults, href: "/consultations" },
    { label: t.rituals.careRituals, href: "/soin-rituels" },
  ];

  const navItemsXs = [
    { label: t.homePage.homePage, href: "/" },
    { label: t.aboutMe.aboutMe, href: "/about" },
    { label: t.consults.consults, href: "/consultations" },
    { label: t.rituals.careRituals, href: "/soin-rituels" },
    { label: t.general.contactMe, href: "/contact" },
  ];

  return (
    <AppBar position="fixed" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
              width: '3.5rem',
              height: '3.5rem'
            }}
          >
            <img src={logo} alt="Logo Claire Aube" className='logo' loading="lazy" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
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
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 0,
              display: { xs: 'flex', md: 'none' },
              width: '3rem',
              height: '3rem'
            }}
          >
            <img src={logo} alt="Logo Claire Aube" className='logo' loading="lazy" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={handleCloseNavMenu}
                component="a"
                href={item.href}
                sx={{ my: 0, color: 'primary', display: 'block', textTransform: 'none', fontSize: '1rem' }}
              >
                {item.label}
              </Button>
            )
            )}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
            <Button
              component="a"
              href="/contact"
              sx={{ color: "primary", textTransform: 'none', fontSize: '1rem'  }}
            >
              {t.general.contactMe}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
