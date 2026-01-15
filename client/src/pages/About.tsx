import { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Paper, useTheme, CircularProgress } from '@mui/material';


interface Profile {
    aboutTitle: string;
    aboutParagraphs: string[];
    imageData: string;
}

interface TimelineItem {
    title: string;
    company: string;
    date: string;
    description: string;
}

interface Interest {
    icon: string;
    title: string;
    description: string;
}

const About = () => {
    const theme = useTheme();
    const [profile, setProfile] = useState<Profile | null>(null);
    const [timeline, setTimeline] = useState<TimelineItem[]>([]);
    const [interests, setInterests] = useState<Interest[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [profileRes, timelineRes, interestsRes] = await Promise.all([
                fetch('/api/profile'),
                fetch('/api/timeline'),
                fetch('/api/interests')
            ]);

            const profileData = await profileRes.json();
            const timelineData = await timelineRes.json();
            const interestsData = await interestsRes.json();

            setProfile(profileData);
            setTimeline(timelineData);
            setInterests(interestsData);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Fallback data
            setProfile({
                aboutTitle: 'Hello! I\'m a Full Stack Developer',
                aboutParagraphs: [
                    'I\'m a passionate developer with a strong interest in creating innovative web applications.',
                    'I enjoy working on both frontend and backend technologies.',
                    'When I\'m not coding, you can find me reading tech blogs.'
                ],
                imageData: ''
            });
            setTimeline([]);
            setInterests([]);
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
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
                <Typography
                    variant="h2"
                    sx={{
                        mb: 2,
                        fontWeight: 'bold',
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                        background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    About Me
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                        fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                >
                    Get to know me better
                </Typography>
            </Box>

            {/* About Content */}
            <Box sx={{ display: 'flex', gap: { xs: 3, md: 4 }, alignItems: 'center', mb: { xs: 6, md: 8 }, flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            width: { xs: 200, sm: 250, md: 300 },
                            height: { xs: 200, sm: 250, md: 300 },
                            borderRadius: 4,
                            overflow: 'hidden',
                            boxShadow: `0 20px 40px ${theme.palette.primary.main}4D`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
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

                <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography
                        variant="h4"
                        sx={{
                            mb: 3,
                            fontWeight: 'bold',
                            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' },
                        }}
                    >
                        {profile?.aboutTitle}
                    </Typography>
                    {profile?.aboutParagraphs.map((paragraph, index) => (
                        <Typography
                            key={index}
                            variant="body1"
                            color="text.secondary"
                            sx={{
                                mb: 2,
                                lineHeight: 1.8,
                                fontSize: { xs: '0.95rem', md: '1rem' },
                            }}
                        >
                            {paragraph}
                        </Typography>
                    ))}
                </Box>
            </Box>

            {/* Experience & Education */}
            <Box sx={{ mb: { xs: 6, md: 8 } }}>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{
                        mb: { xs: 4, md: 6 },
                        fontWeight: 'bold',
                        fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                    }}
                >
                    Experience & Education
                </Typography>
                <Box sx={{ position: 'relative', pl: { xs: 3, md: 6 } }}>
                    {/* Timeline line */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: 20,
                            top: 0,
                            bottom: 0,
                            width: 2,
                            background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        }}
                    />

                    {timeline.length > 0 ? timeline.map((item, index) => (
                        <Box key={index} sx={{ position: 'relative', mb: { xs: 3, md: 4 } }}>
                            {/* Timeline dot */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: { xs: -20, md: -26 },
                                    top: 20,
                                    width: { xs: 10, md: 12 },
                                    height: { xs: 10, md: 12 },
                                    borderRadius: '50%',
                                    backgroundColor: theme.palette.primary.main,
                                    border: `3px solid ${theme.palette.background.paper}`,
                                    boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
                                }}
                            />
                            <Paper elevation={2} sx={{ p: { xs: 2, md: 3 } }}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 1,
                                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: theme.palette.primary.main,
                                        mb: 1,
                                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                                    }}
                                >
                                    {item.company}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        fontStyle: 'italic',
                                        mb: 2,
                                        fontSize: { xs: '0.85rem', md: '0.875rem' },
                                    }}
                                >
                                    {item.date}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color="text.secondary"
                                    sx={{
                                        lineHeight: 1.6,
                                        fontSize: { xs: '0.95rem', md: '1rem' },
                                    }}
                                >
                                    {item.description}
                                </Typography>
                            </Paper>
                        </Box>
                    )) : null}
                </Box>
            </Box>

            {/* Interests & Hobbies */}
            <Box>
                <Typography
                    variant="h3"
                    align="center"
                    sx={{
                        mb: { xs: 4, md: 6 },
                        fontWeight: 'bold',
                        fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                    }}
                >
                    Interests
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
                    {(interests.length > 0 ? interests : [
                        { icon: '💻', title: 'Coding', description: 'Building projects and exploring new technologies' },
                        { icon: '📚', title: 'Learning', description: 'Reading tech articles and taking online courses' },
                        { icon: '🎨', title: 'Design', description: 'Creating beautiful and intuitive user interfaces' },
                        { icon: '🤝', title: 'Collaboration', description: 'Working with teams and contributing to open source' },
                    ]).map((interest, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    textAlign: 'center',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)',
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h3" sx={{ mb: 2 }}>
                                        {interest.icon}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        {interest.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {interest.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box >
        </Container >
    );
};

export default About;
