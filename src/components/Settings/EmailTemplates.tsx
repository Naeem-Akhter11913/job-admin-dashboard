import React from 'react';
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    Switch,
    Paper,
    Box,
} from '@mui/material';

const EmailTemplates: React.FC = () => {
    const [switches, setSwitches] = React.useState({
        'New Application Auto-Reply': true,
        'Interview Invitation': false,
        'Rejection Email': true,
        'Job Offer Email': false,
    });

    const handleToggle = (template: string) => {
        setSwitches(prev => ({
            ...prev,
            [template]: !prev[template as keyof typeof prev]
        }));
    };

    return (
        <Paper elevation={1}>
            <Box sx={{ p: 2 }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        mb: 2,
                        letterSpacing: '-0.01em',
                    }}
                >
                    Email Templates
                </Typography>

                <List sx={{ p: 0 }}>
                    {Object.keys(switches).map((template, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                px: 0,
                                py: 1,
                                borderBottom: index < Object.keys(switches).length - 1 ? '1px solid' : 'none',
                                borderColor: 'grey.100',
                            }}
                        >
                            <ListItemText
                                primary={template}
                                primaryTypographyProps={{
                                    variant: 'body2',
                                    sx: { color: 'text.primary', fontWeight: 500 },
                                }}
                            />
                            <Switch
                                checked={switches[template as keyof typeof switches]}
                                onChange={() => handleToggle(template)}
                                size="small"
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Paper>
    );
};

export default EmailTemplates;