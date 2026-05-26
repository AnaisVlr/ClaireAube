import logoTerracota from '../assets/img/logo/logo_terracota.webp'
import logoWhite from '../assets/img/logo/logo_white.png'
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
import { useLocation, Link } from "react-router";
import { useState, useEffect, MouseEvent } from 'react';

export const Header = () => {
  const t = useTexts();
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);

  // IntersectionObserver au scroll
  useEffect(() => {
    const videoSection = document.getElementById("video-section");
    if (!videoSection) {
      setScrolled(true); // si pas de vidéo sur la page, navbar opaque
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setScrolled(!entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(videoSection);

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navItems = [
    { label: t.homePage.homePage, href: "/" },
    // { label: t.aboutMe.aboutMe, href: "/about" },
    { label: t.consults.consults, href: "/consultations" },
    { label: t.rituals.careRituals, href: "/soin-rituels" },
  ];

  const navItemsXs = [
    ...navItems,
    { label: t.general.contactMe, href: "/contact" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 1 : 0}
      sx={{
        transition: "background-color 0.4s ease",
        backgroundColor: scrolled ? "secondary.main" : "transparent",
        boxShadow: "none",
        color: scrolled ? 'secondary.main' : 'primary.main'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo Desktop */}
          <Typography
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              textDecoration: 'none',
              width: '3.5rem',
              height: '3.5rem'
            }}
          >
            <img src={scrolled ? logoTerracota : logoWhite} alt="Logo Claire Aube" className='logo' loading="lazy" />
          </Typography>

          {/* Menu Mobile */}
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
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navItemsXs.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={item.href}
                >
                  <Typography
                    sx={{
                      textAlign: 'center',
                      fontWeight: location.pathname === item.href ? "bold" : "normal",
                      textDecoration: location.pathname === item.href ? "underline" : "none",
                      color: scrolled ? 'secondary.main' : 'primary.main'
                    }}
                  >
                    {item.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo Mobile */}
          <Typography
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 0,
              display: { xs: 'flex', md: 'none' },
              width: '3rem',
              height: '3rem'
            }}
          >
            <img src={scrolled ? logoWhite : logoTerracota} alt="Logo Claire Aube" className='logo' loading="lazy" />
          </Typography>

          {/* Menu Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.href}
                sx={{
                  my: 0,
                  color: scrolled ? 'primary.main' : 'secondary.main',
                  display: 'block',
                  textTransform: 'none',
                  fontSize: '1rem',
                  borderBottom: location.pathname === item.href ? "2px solid currentColor" : "2px solid transparent",
                  borderRadius: 0,
                  transition: "border-color 0.3s ease",
                  "&:hover": {
                    borderBottom: "2px solid currentColor",
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Bouton contact Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              disableElevation
              sx={{
                textTransform: 'none',
                backgroundColor: scrolled ? 'primary.main' : 'secondary.main',
                color: scrolled ? 'secondary.main' : 'primary.main'
              }}
            >
              {t.general.contactMe}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
};
