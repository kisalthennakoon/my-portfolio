import { useState, useEffect, FormEvent } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    TextField,
    Button,
    Alert,
    Card,
    CardContent,
    Link as MuiLink,
    useTheme,
    CircularProgress,
} from '@mui/material';
import { Email as EmailIcon, Phone as PhoneIcon, LocationOn as LocationIcon } from '@mui/icons-material';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface SocialLink {
    platform: string;
    url: string;
}

interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    social: SocialLink[];
}

const Contact = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContactInfo();
    }, []);

    const fetchContactInfo = async () => {
        try {
            const response = await fetch('/api/contact-info');
            const data = await response.json();
            setContactInfo(data);
        } catch (error) {
            console.error('Error fetching contact info:', error);
            // Fallback data
            setContactInfo({
                email: 'your.email@example.com',
                phone: '+1 (123) 456-7890',
                location: 'City, Country',
                social: [
                    { platform: 'GitHub', url: 'https://github.com/yourusername' },
                    { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
                    { platform: 'Twitter', url: 'https://twitter.com/yourusername' }
                ]
            });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again later.');
            console.error('Error sending message:', error);
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
        <Container maxWidth="lg" sx={{ py: 8 }}>
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                    variant="h2"
                    sx={{
                        mb: 2,
                        fontWeight: 'bold',
                        background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    Get In Touch
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Feel free to reach out to me for any inquiries or opportunities
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {/* Contact Info */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
                        <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                            Contact Information
                        </Typography>

                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: '50%',
                                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <EmailIcon sx={{ color: theme.palette.primary.contrastText }} />
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        Email
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {contactInfo?.email}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: '50%',
                                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <PhoneIcon sx={{ color: theme.palette.primary.contrastText }} />
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        Phone
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {contactInfo?.phone}
                                    </Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                <Box
                                    sx={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: '50%',
                                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <LocationIcon sx={{ color: theme.palette.primary.contrastText }} />
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                        Location
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {contactInfo?.location}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ pt: 3, borderTop: '2px solid #f0f0f0' }}>
                            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                                Connect With Me
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {contactInfo?.social.map((social) => (
                                    <Button
                                        key={social.platform}
                                        variant="outlined"
                                        size="small"
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            borderColor: theme.palette.primary.main,
                                            color: theme.palette.primary.main,
                                            '&:hover': {
                                                borderColor: theme.palette.primary.main,
                                                background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                                color: theme.palette.primary.contrastText,
                                            },
                                        }}
                                    >
                                        {social.platform}
                                    </Button>
                                ))}
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

                {/* Contact Form */}
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ p: 4 }}>
                        <Box component="form" onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                label="Subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                fullWidth
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows={6}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                fullWidth
                                disabled={status === 'sending'}
                                sx={{
                                    mt: 3,
                                    py: 1.5,
                                    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                                    color: theme.palette.primary.contrastText,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: `0 10px 20px ${theme.palette.primary.main}66`,
                                    },
                                    '&:disabled': {
                                        opacity: 0.6,
                                    },
                                }}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </Button>

                            {status === 'success' && (
                                <Alert severity="success" sx={{ mt: 3 }}>
                                    Message sent successfully! I'll get back to you soon.
                                </Alert>
                            )}

                            {status === 'error' && (
                                <Alert severity="error" sx={{ mt: 3 }}>
                                    {errorMessage}
                                </Alert>
                            )}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
