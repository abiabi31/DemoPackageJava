import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const data = [
  {
    id: 1,
    category: "NURSERS",
    qualification: "BSC NURSERS",
    gender: "FEMALE",
    mandatory: "PROMETRIC",
    quantity: 10,
    salary: "30000",
  },
];

export default function MailPopup({
  open,
  selectedRow,
  setOpen,
  setSelectedRow,
}) {
  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  return (
    <>
      {/* POPUP / DIALOG */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Send us a message
          {/* <IconButton onClick={handleClose} sx={{ ml: 2 }}>
            <CloseIcon />
          </IconButton> */}
        </DialogTitle>

        <DialogContent>
          {selectedRow && (
            <Box sx={{ mt: 1 }}>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Details of {selectedRow.category}
              </Typography>

              <TextField fullWidth margin="dense" label="Your Name" />
              <TextField fullWidth margin="dense" label="Your Email" />
              <TextField fullWidth margin="dense" label="Phone" />
              <TextField
                fullWidth
                margin="dense"
                label="Message"
                multiline
                rows={4}
              />

              <Box sx={{ mt: 2, textAlign: "right" }}>
                <Button onClick={handleClose} sx={{ mr: 1 }}>
                  Cancel
                </Button>
                <Button variant="contained">Send Message</Button>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
