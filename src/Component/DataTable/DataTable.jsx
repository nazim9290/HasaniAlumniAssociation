import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, columns, loading }) {
  return (
    <div>
      <Paper sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  );
}
