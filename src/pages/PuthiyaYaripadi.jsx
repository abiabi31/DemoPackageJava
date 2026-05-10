import React, { useState, useMemo } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  Search as SearchIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material";

const PuthiyaYaripadi = () => {
  const [searchText, setSearchText] = useState("");
  const [rows] = useState([
    {
      id: 1,
      userName: "John Doe",
      category: "Development",
      createdDate: "2026-05-01",
      status: "active",
    },
    {
      id: 2,
      userName: "Jane Smith",
      category: "Design",
      createdDate: "2026-05-02",
      status: "inactive",
    },
    {
      id: 3,
      userName: "Bob Johnson",
      category: "Marketing",
      createdDate: "2026-05-03",
      status: "active",
    },
    {
      id: 4,
      userName: "Alice Brown",
      category: "Support",
      createdDate: "2026-05-04",
      status: "pending",
    },
    {
      id: 5,
      userName: "Charlie Wilson",
      category: "Development",
      createdDate: "2026-05-05",
      status: "active",
    },
    {
      id: 6,
      userName: "Diana Davis",
      category: "HR",
      createdDate: "2026-05-06",
      status: "inactive",
    },
    {
      id: 7,
      userName: "Edward Miller",
      category: "Finance",
      createdDate: "2026-05-07",
      status: "active",
    },
  ]);

  const filteredRows = useMemo(() => {
    if (!searchText) return rows;
    return rows.filter(
      (row) =>
        row.userName.toLowerCase().includes(searchText.toLowerCase()) ||
        row.category.toLowerCase().includes(searchText.toLowerCase()) ||
        row.createdDate.includes(searchText) ||
        row.status.toLowerCase().includes(searchText.toLowerCase()),
    );
  }, [rows, searchText]);

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "success";
      case "inactive":
        return "error";
      case "pending":
        return "warning";
      default:
        return "default";
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "userName",
      headerName: "User Name",
      width: 180,
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      width: 130,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "createdDate",
      headerName: "Created Date",
      width: 130,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Chip
          label={params.value.charAt(0).toUpperCase() + params.value.slice(1)}
          color={getStatusColor(params.value)}
          size="small"
          variant="outlined"
        />
      ),
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Puthiya Yaripadi
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search by user name, category, date, or status..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mb: 2 }}
        />

        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5, 10, 25]}
            checkboxSelection
            disableSelectionOnClick
            sx={{
              "& .MuiDataGrid-row:hover": {
                backgroundColor: "action.hover",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "1px solid",
                borderColor: "divider",
              },
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default PuthiyaYaripadi;
