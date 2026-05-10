import React from "react";
import { Box, Grid, Paper, Typography, Card, CardContent } from "@mui/material";
import {
  People as PeopleIcon,
  Assignment as AssignmentIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: <PeopleIcon sx={{ fontSize: 40, color: "primary.main" }} />,
      change: "+12%",
    },
    {
      title: "Active Tasks",
      value: "89",
      icon: <AssignmentIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
      change: "+5%",
    },
    {
      title: "Performance",
      value: "94.2%",
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: "success.main" }} />,
      change: "+2.1%",
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  {stat.icon}
                  <Box ml={2}>
                    <Typography variant="h6" component="div">
                      {stat.title}
                    </Typography>
                    <Typography variant="h4" component="div" color="primary">
                      {stat.value}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {stat.change} from last month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Recent activities will be displayed here...
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Quick Stats
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Additional statistics and charts will be displayed here...
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
