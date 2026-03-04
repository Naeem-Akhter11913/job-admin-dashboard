import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Switch,
    Divider,
    Paper,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationsControll: React.FC = () => {
    const [switches, setSwitches] = React.useState({
        'New Applications': true,
        'Candidate Messages': true,
        'Interview Requests': false,
        'Weekly Reports': true,
    });

    const handleToggle = (notification: string) => {
        setSwitches(prev => ({
            ...prev,
            [notification]: !prev[notification as keyof typeof prev]
        }));
    };

    const notifications = [
        'New Applications',
        'Candidate Messages',
        'Interview Requests',
        'Weekly Reports',
    ];

    return (
        <Paper elevation={1} sx={{ p: 2 }}>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        letterSpacing: '-0.01em',
                    }}
                >
                    Notifications
                </Typography>
            </Box>

            <Typography
                variant="body2"
                sx={{
                    color: 'text.secondary',
                    mb: 2,
                    ml: 4,
                }}
            >
                Manage email and in-app notifications
            </Typography>

            <Divider sx={{ mb: 1 }} />

            <List sx={{ p: 0 }}>
                {notifications.map((notification, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            px: 0,
                            py: 1,
                        }}
                    >
                        <ListItemText
                            primary={notification}
                            primaryTypographyProps={{
                                variant: 'body2',
                                sx: { color: 'text.primary', fontWeight: 500 },
                            }}
                        />
                        <Switch
                            checked={switches[notification as keyof typeof switches]}
                            onChange={() => handleToggle(notification)}
                            size="small"
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default NotificationsControll;