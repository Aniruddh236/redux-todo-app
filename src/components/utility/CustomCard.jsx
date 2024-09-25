import React from "react";
import { Box, Card, CardContent, CircularProgress, Typography } from '@mui/material';

export default function CustomCard({ cardName = "default card", tasks = [] }) {
    return <>
        <Card sx={{ maxWidth: 500, margin: 'auto', mt: 2 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                    {cardName}
                </Typography>

                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                    <CircularProgress
                        variant="determinate"
                        value={100}
                        size={100}
                        sx={{
                            color: 'green', // Completed tasks color
                            position: 'relative',
                            zIndex: 1,
                        }}
                    />
                    <Box
                        sx={{
                            top: '50%',
                            left: '50%',
                            position: 'absolute',
                            transform: 'translate(-50%, -50%)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Typography variant="h6" component="div">
                            {tasks.length}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Tasks
                        </Typography>
                    </Box>

                </Box>
            </CardContent>
        </Card>
    </>
}