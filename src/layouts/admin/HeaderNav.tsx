import {
  CheckOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoonOutlined,
  SettingOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Dropdown,
  Flex,
  Layout,
  MenuProps,
  message,
  Modal,
  Switch,
  Tooltip,
} from "antd";
import { useState } from "react";
import { useTheme } from "../../providers/ThemeProvider";
import { Theme } from "../../types/theme";
import { colors } from "../../constants/theme";
import { useAuthStore } from "../../store/auth-store";

const { Header } = Layout;

type PropsType = {
  collapsed: boolean;
  setCollapsed: () => void;
};

const HeaderNav = ({ collapsed, setCollapsed }: PropsType) => {
  const { theme, setTheme, mode, setMode, currentTheme }  = useTheme()
  const {user, logout} = useAuthStore()
  const items: MenuProps["items"] = [
    {
      key: "user-profile-link",
      label: "profile",
      icon: <UserOutlined />,
    },
    {
      key: "user-settings-link",
      label: "settings",
      icon: <SettingOutlined />,
      onClick: () => {
        showModal();
      }
    },
    {
      type: "divider",
    },
    {
      key: "user-logout-link",
      label: "logout",
      icon: <LogoutOutlined />,
      danger: true,
      onClick: () => {
        logout()
        message.open({
          type: "success",
          content: 'Log out',
        });
      },
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <Header
      style={{ backgroundColor: currentTheme?.mute_background || "#f0f0f0" }}
      className={`sticky shadow-sm top-0 z-10 flex items-center justify-between gap-2 transition-all duration-200 `}
    >
      <Flex align="center">
        <div
          className="text-xl cursor-pointer hover:opacity-100 opacity-70"
          onClick={setCollapsed}
        >
          {collapsed ? <MenuUnfoldOutlined className="!text-textcolor"/> : <MenuFoldOutlined className="!text-textcolor"/>}
        </div>
      </Flex>
      <Flex align="center" gap="small">
        <Tooltip title="Theme">
          <Switch
            className=" hidden sm:inline"
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
            checked={mode === 'dark' }
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          />
        </Tooltip>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Flex>
            {/* <img
                    src="../assets/images/antd_logo.png"
                    alt="user profile photo"
                    height={36}
                    width={36}
                    // style={{ borderRadius, objectFit: 'cover' }}
                  /> */}
            <Avatar
              style={{ verticalAlign: "middle" }}
              size="large"
              gap={2}
            >
              {user?.name[0] || 'A'}
            </Avatar>
          </Flex>
        </Dropdown>
      </Flex>

      <Modal title="Setting" open={isModalOpen} onOk={handleOk} 
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
        OK
      </Button>
      ]}
      >
        <Flex gap={10}>
        {colors.map(color => (
         <div key={color.name} className="relative">
          {/* <div className="absolute w-14 h-14 z-20 flex justify-center rounded-full items-center bg-black">
            <CheckOutlined className="text-white text-xl"/>
          </div> */}
           <Tooltip title={color.name} >
            <Button className={`rounded-full w-14 h-14`}
            onClick={() => setTheme(color.name.toLowerCase() as Theme)}
            style={{ backgroundColor: color.value }}  >
              {theme === color.name.toLowerCase() && <CheckOutlined className="text-white text-xl"/>}
            </Button>
          </Tooltip>
         </div>
        ))}
        </Flex>
      </Modal>
    </Header>
  );
};

export default HeaderNav;
