import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container, useTheme } from '@mui/material';

const Navbar = () => {
    const theme = useTheme();

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
                        }}
                    >
                        Portfolio
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            component={Link}
                            to="/"
                            sx={{
                                color: theme.palette.primary.contrastText,
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                },
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/projects"
                            sx={{
                                color: theme.palette.primary.contrastText,
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                },
                            }}
                        >
                            Projects
                        </Button>
                        <Button
                            component={Link}
                            to="/about"
                            sx={{
                                color: theme.palette.primary.contrastText,
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                },
                            }}
                        >
                            About
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            sx={{
                                color: theme.palette.primary.contrastText,
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                },
                            }}
                        >
                            Contact
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
