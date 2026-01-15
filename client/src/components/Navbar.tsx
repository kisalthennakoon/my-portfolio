import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    useTheme,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'Projects', path: '/projects' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ];

    const drawer = (
        <Box
            sx={{
                width: 250,
                height: '100%',
                background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.path}
                            onClick={handleDrawerToggle}
                            sx={{
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                },
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                sx={{
                                    textAlign: 'center',
                                    '& .MuiTypography-root': {
                                        fontWeight: 600,
                                        fontSize: '1.1rem',
                                    }
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="sticky"
            sx={{
                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography
                        variant="h4"
                        component={Link}
                        to="/"
                        sx={{
                            fontWeight: 'bold',
                            color: theme.palette.primary.contrastText,
                            textDecoration: 'none',
                            fontSize: { xs: '1.5rem', sm: '2rem' },
                        }}
                    >
                        Portfolio
                    </Typography>

                    {isMobile ? (
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerToggle}
                            sx={{ color: 'white' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color: theme.palette.primary.contrastText,
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </Box>
                    )}
                </Toolbar>
            </Container>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
