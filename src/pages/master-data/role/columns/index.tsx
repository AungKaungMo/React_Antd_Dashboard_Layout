import { Button, Space, TableProps, Tooltip } from "antd";
import { RoleListType } from "../../../../types/role";
import { EditOutlined } from "@ant-design/icons";

export const renderRoleColumns = (currentPage: number, pageSize: number, handleEditOpen: (Role : RoleListType) => void) => {
    const columns: TableProps<RoleListType>['columns'] = [
        {
          title: "ID",
          key: "id",
          render: (_, __, index) => {
            const rowNumber = (index + 1) + (currentPage - 1) * pageSize;
            return <p>{rowNumber}</p>; // Display adjusted row number
          },
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: 'Action',
          key: 'action',
          render: (role) => (
            <Space size="middle">
              <Tooltip title="Edit">
                <Button
                  type="default"
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={() => handleEditOpen(role as RoleListType)}
                />
              </Tooltip>
            </Space>
          ),
        },
      
    ];

    return columns;
}