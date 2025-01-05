import { Layout } from "antd";
import SideNav from "./SideNav";
import { ReactNode, Suspense, useState } from "react";
import HeaderNav from "./HeaderNav";
import { Content } from "antd/es/layout/layout";
import PageLoading from "../../components/Loading/PageLoading";
// import ThemeSwitcher from "./components/ThemeSwitcher";

const AdminLayout = ({children} : {children: ReactNode}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
   <>
    <div
      className="min-h-screen flex"
      
    >
      <SideNav
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      />
      <Layout className="w-full">
        <HeaderNav setCollapsed={() => setCollapsed(!collapsed)} collapsed={collapsed}/>
        <Content
          className={`transition-all duration-200  w-11/12 mx-auto
          mt-8 min-h-[360px]`}
          >
            <Suspense fallback={<PageLoading />}>
                {children}
            </Suspense>
          </Content>
      </Layout>
    </div>
   </>
  );
};

export default AdminLayout;
