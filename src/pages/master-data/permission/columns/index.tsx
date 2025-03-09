import { Button, Space, TableProps, Tooltip } from "antd";
import { PermissionListType } from "../../../../types/permission";
import { EditOutlined } from "@ant-design/icons";

export const renderPermissionColumns = (currentPage: number, pageSize: number, handleEditOpen: (permission : PermissionListType) => void) => {
    const columns: TableProps<PermissionListType>['columns'] = [
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
          render: (permission) => (
            <Space size="middle">
              <Tooltip title="Edit">
                <Button
                  type="default"
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={() => handleEditOpen(permission as PermissionListType)}
                />
              </Tooltip>
            </Space>
          ),
        },
      
    ];

    return columns;
}