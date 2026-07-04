import React from "react";
import {
  Box,
  TextField,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router";

const Education = () => {
  const navigate = useNavigate();

  const handlePrev = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/work-experience");
  };
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", mt: 4, mb: 4, p: 3 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          minHeight: "70vh",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Education Details
          </Typography>

          {/* 10th Row */}
          <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Grid
              item
              xs={12}
              sm={2}
              sx={{ minWidth: 120, textAlign: "left", pr: 2 }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                10th
              </Typography>
            </Grid>
            <Grid item xs={12} sm>
              <TextField
                fullWidth
                label="School Name"
                placeholder="ABC High School"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm>
              <TextField
                fullWidth
                label="Marks (%)"
                placeholder="95"
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm>
              <TextField
                fullWidth
                label="Passing Year"
                placeholder="2018"
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>

          {/* 12th Row */}
          <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Grid
              item
              xs={12}
              sm={2}
              sx={{ minWidth: 120, textAlign: "left", pr: 2 }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                12th
              </Typography>
            </Grid>
            <Grid item xs={12} sm>
              <TextField
                fullWidth
                label="School/College Name"
                placeholder="XYZ Senior Secondary School"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm>
              <TextField
                fullWidth
                label="Marks (%)"
                placeholder="90"
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm>
              <TextField
                fullWidth
                label="Passing Year"
                placeholder="2020"
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>

          {/* Graduation Row */}
          <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Grid
              item
              xs={12}
              sm={2}
              sx={{ minWidth: 120, textAlign: "left", pr: 2 }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                B.Tech
              </Typography>
            </Grid>
            <Grid item xs={12} sm>
              <TextField
                fullWidth
                label="College Name"
                placeholder="XYZ College of Engineering"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm>
              <TextField
                fullWidth
                label="CGPA"
                placeholder="8.5"
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm>
              <TextField
                fullWidth
                label="Passing Year"
                placeholder="2024"
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>

        {/* Footer Buttons */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button variant="outlined" color="primary" onClick={handlePrev}>
            Prev
          </Button>
          <Button variant="contained" color="secondary" sx={{ mx: 1 }}>
            Save
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Next
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Education;
