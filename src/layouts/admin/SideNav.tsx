import { PieChartOutlined, ProjectOutlined, RollbackOutlined, UserAddOutlined } from "@ant-design/icons";
import { Layout, ConfigProvider, Menu, MenuProps, SiderProps } from "antd";
import { useEffect, useRef, useState } from "react";
import { Link, matchPath, useLocation } from "react-router-dom";
import AndtLogo from '../../assets/images/antd_logo.png'
import { ROUTES } from "../../constants/route";
import { useTheme } from "../../providers/ThemeProvider";
const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

// const items: MenuProps["items"] = [
  // getItem("User Management", "user_management", <UsergroupAddOutlined />, [
  //   getItem(<Link to={ROUTES.user}>User</Link>, "user", null),
  //   getItem(<Link to={ROUTES.role}>Role</Link>, "roles", null),
  //   getItem(<Link to={ROUTES.permission}>Permission</Link>, "permission", null),
  // ]),
// ];
// const rootSubmenuKeys = ["dashboards", "corporate", "user-profile"];

const SideNav = ({collapsed, ...others} : SiderProps ) => {
  const nodeRef = useRef(null);
  // const [openKeys, setOpenKeys] = useState([""]);
  const [current, setCurrent] = useState("");
  const { pathname } = useLocation();
  const { currentTheme } = useTheme()

  const dynamicItems = () => {
    const isProjectDashboard = matchPath("/project/:id", pathname) || pathname.includes('document');

    if(isProjectDashboard) {
      return [
        getItem(
          <Link to={ROUTES.project_detail}>Dashboard</Link>,
          "project_detail",
          <ProjectOutlined />
        ),
        getItem(
          <Link to={ROUTES.document}>Document</Link>,
          "document",
          <ProjectOutlined />
        ),
      ]
    }else {
      return [
        getItem('Dashboard', 'dashboard_group', null, [], 'group'),
        getItem(
          <Link to={ROUTES.dashboard}>Dashboard</Link>,
          'dashboard',
          <PieChartOutlined />
        ),
        getItem(
          <Link to={ROUTES.project}>Project</Link>,
          'project',
          <ProjectOutlined />
        ),
        getItem('Master Data', 'master_data', null, [], 'group'),
        // getItem(
        //   <Link to={ROUTES.department}>Department</Link>,
        //   'department',
        //   <ProjectOutlined />
        // ),
        getItem(
          <Link to={ROUTES.role}>Role</Link>,
          'role',
          <RollbackOutlined />
        ),
        getItem(
          <Link to={ROUTES.permission}>Permission</Link>,
          'permission',
          <ProjectOutlined />
        ),
        getItem(
          <Link to={ROUTES.user}>User</Link>,
          'user',
          <UserAddOutlined />
        ),
      ]
    }
  }

  const filterItems = collapsed
  ? dynamicItems().filter((item) => item?.type !== "group")
  : dynamicItems();
  
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  // const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    // const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    // if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
    //   setOpenKeys(keys);
    // } else {
      // setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    // }
  // };

  /*** 
    MAKING TO SHOW ACTIVE AND CURRENT ROUTE
  ***/  

  useEffect(() => {
    const paths = pathname.split('/')?.filter(p => p != '');
    // setOpenKeys(paths);
    // setCurrent(paths[paths.length - 1]);
 
    if(paths && paths.length > 1) {
      setCurrent(paths[0].concat("_detail"))
    }else {
      setCurrent(paths[paths.length - 1]);
    }
  }, [pathname]);

  return (
    <Sider width={collapsed ? 70: 250} ref={nodeRef} 
    collapsedWidth={70}
    breakpoint="lg"  
    collapsed={collapsed}
    style={{ backgroundColor: currentTheme?.mute_background  || "#f0f0f0" }}
    {...others}
    >    
    <div className="flex justify-center items-center my-5">
    <img src={AndtLogo} className=" w-12" />

    </div>
    <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBg: "none",
              itemColor: currentTheme?.color_text,
              itemSelectedBg: currentTheme?.color_primary,
              itemHoverBg: currentTheme?.color_primary,
              itemHoverColor: currentTheme?.background_text,
              itemSelectedColor: currentTheme?.background_text,
            },
          },
        }}
      >
        <Menu
          mode="inline"
          items={filterItems}
          onClick={onClick}
          // openKeys={openKeys}
          // onOpenChange={onOpenChange}
          selectedKeys={[current]}
          className="!border-none "
        />
      </ConfigProvider>
    </Sider>
  );
};

export default SideNav;
