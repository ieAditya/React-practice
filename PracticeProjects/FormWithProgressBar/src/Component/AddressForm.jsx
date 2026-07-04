import React from "react";
import { Box, TextField, Typography, Paper, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router";

const AddressForm = () => {
  const navigate = useNavigate();

  const handlePrev = (e) => {
    e.preventDefault();
    navigate("/work-experience");
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/");
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
            Address Details
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address Line 1"
                placeholder="123, Street Name"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address Line 2"
                placeholder="Apartment, Suite, etc."
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Country"
                placeholder="India"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="State"
                placeholder="Karnataka"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="City"
                placeholder="Bangalore"
                variant="outlined"
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Pin Code"
                placeholder="560001"
                type="number"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>

        {/* Footer Buttons: Bottom-right */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
          <Button variant="outlined" color="primary" onClick={handlePrev}>
            Prev
          </Button>
          <Button variant="contained" color="secondary" sx={{ mx: 1 }}>
            Save
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddressForm;
