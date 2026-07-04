import React from "react";
import { Box, TextField, Typography, Grid, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router";

function PersonalDetail() {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/education");
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
        {/* Top: Form Fields */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Personal Details
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Full Name"
                placeholder="John Doe"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Mobile Number"
                placeholder="+91 12345 67890"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Email"
                placeholder="example@email.com"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
            <Box sx={{ width: '100%' }}>
                <TextField
                fullWidth
                type="date"
                label="Date of Birth"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                />
            </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Footer Buttons: Always at bottom-right */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button variant="disabled" color="primary">
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
}

export default PersonalDetail;
