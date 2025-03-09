import { Breadcrumb, Button, Flex, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { renderRoleColumns } from "./columns";
import { useState } from "react";
// import Edit from "./Edit";
import { RoleListType } from "../../../types/role";
import { useRole } from "../../../hooks/use-role";
import Create from "./Create";
import Edit from "./Edit";

const Role = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<RoleListType | undefined>();
  const [createOpen, setCreateOpen] = useState(false);

  const breadcrumbItems = [
    {
      title: "Home",
      onClick: () => navigate("/dashboard"),
      className: "cursor-pointer",
    },
    {
      title: "Role",
    },
  ];

  const { data: roles, isLoading } = useRole(currentPage, pageSize);

  const handleTableChange = (pagination: any) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const handleEditOpen = (role : RoleListType) => {
    setOpen(!open)
    if(role) setSelectedRole(role)
  }

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItems} />
      <Flex justify="space-between" className="mb-4">
        <h1 className=" font-semibold text-xl">ROLES</h1>
        <Button type="primary" onClick={() => setCreateOpen(!createOpen)}>Add Role</Button>
      </Flex>
      <Table<RoleListType>
        columns={renderRoleColumns(currentPage, pageSize, handleEditOpen)}
        dataSource={roles?.data}
        rowKey="id"
        pagination={{
          current: roles?.current_page,
          pageSize: roles?.per_page,
          total: roles?.total,
          showSizeChanger: true,
          pageSizeOptions: ["10", '20', '30', '40', '50']
        }}
        onChange={handleTableChange}
        loading={isLoading}
      />

      {(selectedRole && open) && <Edit handleBoxOpen={() => setOpen(!open)} open={open} role={selectedRole} />}
      {(createOpen) && <Create createOpen={createOpen} handleCreateBoxOpen={() => setCreateOpen(!createOpen)} />} 
    </>
  );
};

export default Role;
