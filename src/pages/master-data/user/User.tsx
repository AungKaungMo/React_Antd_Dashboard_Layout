import { Breadcrumb, Flex, Table } from "antd";
import { UserListType } from "../../../types/user";
import { useUser } from "../../../hooks/use-user";
import { useNavigate } from "react-router-dom";
import { renderUserColumns } from "./columns";
import { useState } from "react";
import Edit from "./Edit";

const User = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserListType | undefined>();

  const breadcrumbItems = [
    {
      title: "Home",
      onClick: () => navigate("/dashboard"),
      className: "cursor-pointer",
    },
    {
      title: "User",
    },
  ];

  const { data: users, isLoading } = useUser(currentPage, pageSize);

  const handleTableChange = (pagination: any) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const handleEditOpen = (user : UserListType) => {
    setOpen(!open)
    if(user) setSelectedUser(user)
  }

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItems} />
      <Flex justify="space-between" className="mb-4">
        <h1 className=" font-semibold text-xl">USERS</h1>
      </Flex>
      <Table<UserListType>
        columns={renderUserColumns(currentPage, pageSize, handleEditOpen)}
        dataSource={users?.data}
        rowKey="id"
        pagination={{
          current: users?.current_page,
          pageSize: users?.per_page,
          total: users?.total,
          showSizeChanger: true,
          pageSizeOptions: ["10", '20', '30', '40', '50']
        }}
        onChange={handleTableChange}
        loading={isLoading}
      />

     {(selectedUser && open) &&  <Edit handleBoxOpen={() => setOpen(!open)} open={open} user={selectedUser} />}
    </>
  );
};

export default User;
