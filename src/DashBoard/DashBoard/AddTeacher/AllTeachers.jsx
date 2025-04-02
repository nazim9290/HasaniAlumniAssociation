import React, { useEffect, useState } from "react";
import TopBarNavigation from "../../../Component/TopBarNavigation/TopBarNavigation";
import { Box, Container, IconButton } from "@mui/material";
import DataTable from "../../../Component/DataTable/DataTable";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteData, fetchData } from "../../../Utility/api";
import TitleBar from "../../../pages/Shared/TitleBar/TitleBar";
import { Navigate, useNavigate } from "react-router-dom";

export default function AllTeachers() {
  const [rows, setRows] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => {
        // console.log(params);
        return (
          <>
            <Box display="flex" alignItems="center">
              <Avatar src={params.value.avatar} sx={{ mr: 1 }} />
              <Box>{params.value.fullName}</Box>
            </Box>
          </>
        );
      },
    },
    { field: "email", headerName: "Email", width: 150 },
    { field: "phone", headerName: "Phone", width: 150 },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        //console.log(params);
        return (
          <Box>
            <IconButton
              onClick={() => handleEdit(params.row.action)}
              color="primary"
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => handleDelete(params.row.action)}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const handleEdit = (id) => {
    console.log("Edit clicked for ID:", id);
    navigate(`/Dashboard/addTeacher/edit/${id}`);

    // Navigate to edit page or open a modal
  };

  const handleDelete = (id) => {
    console.log("Delete clicked for ID:", id);
    deleteData("deleteTeacher", id, setRows);
    // Perform delete action here
  };

  // Fetch data from API
  useEffect(() => {
    fetchData("teacher", setRows, setLoading, (item, i) => ({
      id: i + 1,
      name: { fullName: item.fullName, avatar: item.picture },
      avatar: item.picture,
      email: item.email,
      phone: item.phone,
      action: item._id,
    }));
  }, [setRows]);
  return (
    <Container>
      <TopBarNavigation
        t1={"All Teachers"}
        t2={"Add Teachers"}
      ></TopBarNavigation>
      <TitleBar titleText={"All Teachers"}></TitleBar>
      <Box>
        <DataTable rows={rows} columns={columns} loading={loading}></DataTable>
      </Box>
    </Container>
  );
}
