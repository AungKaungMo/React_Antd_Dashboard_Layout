import { Breadcrumb, Button, Flex, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { renderPermissionColumns } from "./columns";
import { useState } from "react";
import Edit from "./Edit";
import { PermissionListType } from "../../../types/permission";
import { usePermission } from "../../../hooks/use-permission";
import Create from "./Create";

const Permission = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [open, setOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState<PermissionListType | undefined>();
  const [createOpen, setCreateOpen] = useState(false);

  const breadcrumbItems = [
    {
      title: "Home",
      onClick: () => navigate("/dashboard"),
      className: "cursor-pointer",
    },
    {
      title: "Permission",
    },
  ];

  const { data: permissions, isLoading } = usePermission(currentPage, pageSize);

  const handleTableChange = (pagination: any) => {
    setCurrentPage(pagination.current);
    setPageSize(pagination.pageSize);
  };

  const handleEditOpen = (permission : PermissionListType) => {
    setOpen(!open)
    if(permission) setSelectedPermission(permission)
  }

  return (
    <>
      <Breadcrumb style={{ margin: "16px 0" }} items={breadcrumbItems} />
      <Flex justify="space-between" className="mb-4">
        <h1 className=" font-semibold text-xl">PERMISSIONS</h1>
        <Button type="primary" onClick={() => setCreateOpen(!createOpen)}>Add Permission</Button>
      </Flex>
      <Table<PermissionListType>
        columns={renderPermissionColumns(currentPage, pageSize, handleEditOpen)}
        dataSource={permissions?.data}
        rowKey="id"
        pagination={{
          current: permissions?.current_page,
          pageSize: permissions?.per_page,
          total: permissions?.total,
          showSizeChanger: true,
          pageSizeOptions: ["10", '20', '30', '40', '50']
        }}
        onChange={handleTableChange}
        loading={isLoading}
      />

      {(selectedPermission && open) && <Edit handleBoxOpen={() => setOpen(!open)} open={open} permission={selectedPermission} />}
      {(createOpen) && <Create createOpen={createOpen} handleCreateBoxOpen={() => setCreateOpen(!createOpen)} />}
    </>
  );
};

export default Permission;
