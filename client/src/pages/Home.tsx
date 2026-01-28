import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Typography, Button, Grid, Card, CardContent, useTheme, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

interface Profile {
    name: string;
    title: string;
    bio: string;
    imageData: string;
}

interface Skill {
    title: string;
    skills: string;
}

const Home = () => {
    const theme = useTheme();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [skills, setSkills] = useState<Skill[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [profileRes, skillsRes] = await Promise.all([
                axios.get('/api/profile'),
                axios.get('/api/skills')
            ]);

            setProfile(profileRes.data);
            setSkills(skillsRes.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Fallback data
            setProfile({
                name: 'Kisal',
                title: 'Undergraduate',
                bio: 'I create beautiful and functional web applications that solve real-world problems. Passionate about clean code, user experience, and continuous learning.',
                imageData: ''
            });
            setSkills([
                { title: 'Frontend', skills: 'React, TypeScript, HTML5, CSS3, Tailwind' },
                { title: 'Backend', skills: 'Node.js, Express, REST APIs, MongoDB' },
                { title: 'Tools', skills: 'Git, VS Code, Vite, npm, Postman' },
                { title: 'Other', skills: 'Responsive Design, UI/UX, Problem Solving' }
            ]);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <CircularProgress size={60} sx={{ color: theme.palette.primary.main }} />
            </Box>
        );
    }

    return (
        <Box>
            {/* Hero Section */}
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        minHeight: { xs: 'auto', md: '80vh' },
                        py: { xs: 4, md: 8 },
                        gap: { xs: 3, md: 4 },
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Box sx={{ flex: 1, maxWidth: 600, textAlign: { xs: 'center', md: 'left' } }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                                mb: 2,
                                fontWeight: 'bold',
                                lineHeight: 1.2,
                            }}
                        >
                            Hi, I'm{' '}
                            <Box
                                component="span"
                                sx={{
                                    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {profile?.name}
                            </Box>
                        </Typography>
                        <Typography
                            variant="h4"
                            color="text.secondary"
                            sx={{
                                mb: 3,
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                            }}
                        >
                            {profile?.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                mb: 4,
                                lineHeight: 1.8,
                                fontSize: { xs: '0.95rem', md: '1rem' },
                            }}
                        >
                            {profile?.bio}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                            <Button
                                component={Link}
                                to="/projects"
                                variant="contained"
                                size="large"
                                sx={{
                                    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                    color: theme.palette.primary.contrastText,
                                    px: { xs: 3, md: 4 },
                                    py: 1.5,
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: `0 10px 20px ${theme.palette.primary.main}66`,
                                    },
                                }}
                            >
                                View My Work
                            </Button>
                            <Button
                                component={Link}
                                to="/contact"
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: theme.palette.primary.main,
                                    color: theme.palette.primary.main,
                                    px: { xs: 3, md: 4 },
                                    py: 1.5,
                                    borderWidth: 2,
                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                    '&:hover': {
                                        borderWidth: 2,
                                        backgroundColor: theme.palette.primary.main,
                                        color: theme.palette.primary.contrastText,
                                        transform: 'translateY(-2px)',
                                    },
                                }}
                            >
                                Get In Touch
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                width: { xs: 200, sm: 250, md: 300 },
                                height: { xs: 200, sm: 250, md: 300 },
                                borderRadius: '50%',
                                overflow: 'hidden',
                                boxShadow: `0 20px 40px ${theme.palette.primary.main}4d`,
                                border: '5px solid',
                                borderColor: 'transparent',
                                backgroundImage: `linear-gradient(${theme.palette.background.paper}, ${theme.palette.background.paper}), linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                backgroundOrigin: 'border-box',
                                backgroundClip: 'padding-box, border-box',
                            }}
                        >
                            <img
                                src={profile?.imageData}
                                alt="Kisal"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Container>

            {/* Skills Section */}
            <Box sx={{ backgroundColor: 'primary.main', py: { xs: 4, md: 8 } }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            mb: { xs: 4, md: 6 },
                            fontWeight: 'bold',
                            fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                        }}
                    >
                        Skills & Technologies
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }}>
                        {skills.map((skill, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                                        },
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: theme.palette.primary.main,
                                                mb: 2,
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {skill.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {skill.skills}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;
