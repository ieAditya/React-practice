import React from "react";
import {
  Box,
  TextField,
  Typography,
  Paper,
  Grid,
  Stack,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router";

const WorkExperienceForm = () => {
  const navigate = useNavigate();

  const handlePrev = (e) => {
    e.preventDefault();
    navigate("/education");
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/address");
  };
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 4, mb: 4, p: 3 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          minHeight: "70vh",
        }}
      >
        {/* Header */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Work Experience
          </Typography>

          <Grid container spacing={2}>
            {/* Experience: Years */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Experience (Years)"
                type="number"
                placeholder="3"
                variant="outlined"
              />
            </Grid>

            {/* Experience: Months */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Experience (Months)"
                type="number"
                placeholder="6"
                variant="outlined"
              />
            </Grid>

            {/* Skills */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Skills"
                placeholder="React, Node.js, MUI"
                variant="outlined"
              />
            </Grid>

            {/* Previous Organization */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Previous Organization"
                placeholder="ABC Corp"
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

export default WorkExperienceForm;
