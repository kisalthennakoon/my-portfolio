import { useEffect, useState } from 'react';
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
                fetch('/api/profile'),
                fetch('/api/skills')
            ]);

            const profileData = await profileRes.json();
            const skillsData = await skillsRes.json();

            setProfile(profileData);
            setSkills(skillsData);
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
                        minHeight: '80vh',
                        py: 8,
                        gap: 4,
                        flexDirection: { xs: 'column', md: 'row' },
                    }}
                >
                    <Box sx={{ flex: 1, maxWidth: 600 }}>
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '2.5rem', md: '3.5rem' },
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
                        <Typography variant="h4" color="text.secondary" sx={{ mb: 3 }}>
                            {profile?.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
                            {profile?.bio}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <Button
                                component={Link}
                                to="/projects"
                                variant="contained"
                                size="large"
                                sx={{
                                    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                    color: theme.palette.primary.contrastText,
                                    px: 4,
                                    py: 1.5,
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
                                    px: 4,
                                    py: 1.5,
                                    borderWidth: 2,
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
                                width: 300,
                                height: 300,
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
            <Box sx={{ backgroundColor: 'primary.main', py: 8 }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" sx={{ mb: 6, fontWeight: 'bold' }}>
                        Skills & Technologies
                    </Typography>
                    <Grid container spacing={3}>
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
