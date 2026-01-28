import { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Button,
    CircularProgress,
    useTheme,
    useMediaQuery,
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    ImageList,
    ImageListItem
} from '@mui/material';
import { GitHub as GitHubIcon, Launch as LaunchIcon, Close as CloseIcon } from '@mui/icons-material';

interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    github?: string;
    demo?: string;
    image?: string;
    imageData?: string;
    category?: string;
    contribution?: string;
    about?: string;
    photos?: string[];
}

const Projects = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedProject(null);
    };

    const fetchProjects = async () => {
        try {
            const response = await axios.get('/api/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
            // Fallback to local data if backend is not available
            setProjects([
                {
                    id: 1,
                    title: 'E-Commerce Platform',
                    description: 'A full-stack e-commerce application with cart functionality, payment integration, and admin dashboard.',
                    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
                    github: 'https://github.com/yourusername/ecommerce',
                    demo: 'https://demo.example.com'
                },
                {
                    id: 2,
                    title: 'Task Management App',
                    description: 'A collaborative task management tool with real-time updates and team features.',
                    technologies: ['TypeScript', 'Express', 'PostgreSQL', 'Socket.io'],
                    github: 'https://github.com/yourusername/taskapp'
                },
                {
                    id: 3,
                    title: 'Weather Dashboard',
                    description: 'A beautiful weather application with location-based forecasts and interactive maps.',
                    technologies: ['React', 'OpenWeather API', 'Chart.js'],
                    github: 'https://github.com/yourusername/weather',
                    demo: 'https://weather.example.com'
                }
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
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
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
                    Projects
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                        fontSize: { xs: '1rem', md: '1.25rem' },
                    }}
                >
                    Here are some of the projects I've worked on
                </Typography>
            </Box>

            <Grid container spacing={{ xs: 2, md: 4 }}>
                {projects.map((project) => (
                    <Grid item xs={12} md={6} lg={4} key={project.id}>
                        <Card
                            onClick={() => handleProjectClick(project)}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-10px)',
                                    boxShadow: '0 20px 30px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            {project.imageData ? (
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={project.imageData}
                                    alt={project.title}
                                />
                            ) : (
                                <Box
                                    sx={{
                                        height: 200,
                                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography variant="h1" sx={{ color: theme.palette.primary.contrastText, fontWeight: 'bold' }}>
                                        {project.title.charAt(0)}
                                    </Typography>
                                </Box>
                            )}
                            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' }}>
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                                    {project.description}
                                </Typography>
                                {/* <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {project.technologies.map((tech, index) => (
                                        <Chip
                                            key={index}
                                            label={tech}
                                            size="small"
                                            sx={{
                                                backgroundColor: theme.palette.background.default,
                                                color: theme.palette.primary.main,
                                                fontWeight: 600,
                                            }}
                                        />
                                    ))}
                                </Box> */}
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    {/* {project.github && (
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            startIcon={<GitHubIcon />}
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                borderColor: theme.palette.primary.main,
                                                color: theme.palette.primary.main,
                                                '&:hover': {
                                                    borderColor: theme.palette.primary.main,
                                                    backgroundColor: theme.palette.primary.main,
                                                    color: theme.palette.primary.contrastText,
                                                },
                                            }}
                                        >
                                            GitHub
                                        </Button>
                                    )} */}
                                    {project.demo && (
                                        <Button
                                            variant="contained"
                                            size="small"
                                            startIcon={<LaunchIcon />}
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                                color: theme.palette.primary.contrastText,
                                                '&:hover': {
                                                    opacity: 0.9,
                                                },
                                            }}
                                        >
                                            Live Demo
                                        </Button>
                                    )}
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Project Details Dialog */}
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                maxWidth="md"
                fullWidth
                fullScreen={isMobile}
                PaperProps={{
                    sx: {
                        borderRadius: { xs: 0, md: 2 },
                        maxHeight: '90vh',
                        m: { xs: 0, md: 2 },
                    }
                }}
            >
                {selectedProject && (
                    <>
                        <DialogTitle sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                            color: theme.palette.primary.contrastText,
                            pb: 2
                        }}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                {selectedProject.title}
                            </Typography>
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={handleCloseDialog}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent sx={{ pt: 3 }}>
                            {/* Category */}
                            {selectedProject.category && (
                                <Box sx={{ mb: 3, marginTop: 2 }}>
                                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, fontWeight: 'bold' }}>
                                        Category
                                    </Typography>
                                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                        {selectedProject.category}
                                    </Typography>
                                </Box>
                            )}

                            {/* About */}
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    About
                                </Typography>
                                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                    {selectedProject.about}
                                </Typography>
                            </Box>



                            {/* My Contribution */}
                            {selectedProject.contribution && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, fontWeight: 'bold' }}>
                                        My Contribution
                                    </Typography>
                                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                        {selectedProject.contribution}
                                    </Typography>
                                </Box>
                            )}

                            {/* Technologies */}
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Technologies Used
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {selectedProject.technologies.map((tech, index) => (
                                        <Chip
                                            key={index}
                                            label={tech}
                                            size="small"
                                            sx={{
                                                backgroundColor: theme.palette.background.default,
                                                color: theme.palette.primary.main,
                                                fontWeight: 600,
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            {/* Sample Photos */}
                            {selectedProject.photos && selectedProject.photos.length > 0 && (
                                <Box sx={{ mb: 3 }}>
                                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, fontWeight: 'bold' }}>
                                        Sample Photos
                                    </Typography>
                                    <ImageList cols={isMobile ? 1 : 2} gap={8} sx={{ borderRadius: 2, overflow: 'hidden' }}>
                                        {selectedProject.photos.map((photo, index) => (
                                            <ImageListItem key={index}>
                                                <img
                                                    src={photo}
                                                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                                                    loading="lazy"
                                                    style={{
                                                        borderRadius: '8px',
                                                        objectFit: 'cover',
                                                        width: '100%',
                                                        height: '200px'
                                                    }}
                                                />
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </Box>
                            )}

                            {/* Action Buttons */}
                            <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                                {selectedProject.github && (
                                    <Button
                                        variant="outlined"
                                        startIcon={<GitHubIcon />}
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            borderColor: theme.palette.primary.main,
                                            color: theme.palette.primary.main,
                                            '&:hover': {
                                                borderColor: theme.palette.primary.main,
                                                backgroundColor: theme.palette.primary.main,
                                                color: theme.palette.primary.contrastText,
                                            },
                                        }}
                                    >
                                        View on GitHub
                                    </Button>
                                )}
                                {selectedProject.demo && (
                                    <Button
                                        variant="contained"
                                        startIcon={<LaunchIcon />}
                                        href={selectedProject.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                            color: theme.palette.primary.contrastText,
                                            '&:hover': {
                                                opacity: 0.9,
                                            },
                                        }}
                                    >
                                        Live Demo
                                    </Button>
                                )}
                            </Box>
                        </DialogContent>
                    </>
                )}
            </Dialog>
        </Container>
    );
};

export default Projects;
