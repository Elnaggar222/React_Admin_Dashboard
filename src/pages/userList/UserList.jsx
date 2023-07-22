import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  const [usersData, setUsersData] = useState(userRows);

  const handleUserDelete = (userId) => {
    setUsersData(usersData.filter((item) => item.id !== userId));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListuserData">
            <img
              src={params.row.avatar}
              alt="user avatar"
              className="userListImg"
            />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      renderCell: (paaraamss) => {
        return (
          <>
            <Link to={"/user/" + paaraamss.row.id}>
              <button className="userListButton">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDeleteIcon"
              onClick={() => handleUserDelete(paaraamss.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={usersData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[8]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default UserList;
