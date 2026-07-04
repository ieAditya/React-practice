import React from 'react'
import {Link, NavLink, useLocation} from "react-router"

import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  LinearProgress,
  Divider
} from "@mui/material";

function SideBar() {
    const location = useLocation();

    // Simple helper to check if a route is active
    const isActive = (path) => location.pathname === path;

    const routes = [
        { path: "/", label: "Personal Details" },
        { path: "/education", label: "Education" },
        { path: "/work-experience", label: "Work Experience" },
        { path: "/address", label: "Address" },
    ];
  return (
    <Box
      sx={{
        width: 280,
        height: "100%", // ✅ important fix
        bgcolor: "#0f172a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
        boxSizing: "border-box" // ✅ prevents padding overflow
      }}
    >
      {/* Top Section */}
      <Box>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 3, fontWeight: 600 }}
        >
          Profile Setup
        </Typography>

        <List>
        {routes.map(({ path, label }) => (
        <ListItemButton
          key={path}
          component={Link} // use Link for navigation
          to={path}
          sx={{
            mb: 1,
            borderRadius: 1,
            bgcolor: isActive(path) ? "rgba(255,255,255,0.1)" : "transparent",
            borderLeft: isActive(path) ? "4px solid #3b82f6" : "none",
            "&:hover": {
              bgcolor: isActive(path)
                ? "rgba(255,255,255,0.15)"
                : "rgba(255,255,255,0.05)",
            },
          }}
        >
          <ListItemText primary={label} />
        </ListItemButton>
      ))}
        </List>
      </Box>

      {/* Bottom Progress Section */}
      <Box>
        <Divider sx={{ bgcolor: "rgba(255,255,255,0.2)", mb: 2 }} />

        <Typography variant="body2" sx={{ mb: 1 }}>
          Step 1 of 4
        </Typography>

        <LinearProgress
          variant="determinate"
          value={25}
          sx={{
            height: 8,
            borderRadius: 5,
            backgroundColor: "rgba(255,255,255,0.2)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#3b82f6"
            }
          }}
        />
      </Box>
    </Box>
  );
}

export default SideBar