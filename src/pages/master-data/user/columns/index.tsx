import { Button, Space, TableProps, Tag, Tooltip } from "antd";
import { UserListType } from "../../../../types/user";
import { EditOutlined } from "@ant-design/icons";

export const renderUserColumns = (currentPage: number, pageSize: number, handleEditOpen: (user : UserListType) => void) => {
    const columns: TableProps<UserListType>['columns'] = [
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
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          sorter: (a, b) => a.email.localeCompare(b.email),
        },
        {
          title: 'Employee ID',
          dataIndex: 'emp_id',
          key: 'emp_id',
          sorter: (a, b) => a.emp_id.localeCompare(b.emp_id),
        },
        {
          title: 'Department',
          dataIndex: 'department',
          key: 'department',
          render: (dept) => <p>{dept.name}</p>,
          sorter: (a, b) => a.department.name.localeCompare(b.department.name),
        },
        {
          title: 'Business Unit',
          dataIndex: 'business',
          key: 'business',
          render: (business) => <p>{business.name}</p>,
          sorter: (a, b) => a.business.name.localeCompare(b.business.name),
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (status) => <Tag color={status === 0 ? 'red' : 'green'} key={status}>{status === 0 ? 'INACTIVE' : 'ACTIVE'}</Tag>,
        },
        {
          title: 'Action',
          key: 'action',
          render: (user) => (
            <Space size="middle">
              <Tooltip title="Edit">
                <Button
                  type="default"
                  shape="circle"
                  icon={<EditOutlined />}
                  onClick={() => handleEditOpen(user as UserListType)}
                />
              </Tooltip>
            </Space>
          ),
        },
      
    ];

    return columns;
}