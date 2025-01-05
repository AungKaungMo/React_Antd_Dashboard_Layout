import { Flex, Layout, Row } from "antd";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider";

const AuthLayout = () => {
  const { currentTheme } = useTheme();
  return (
    <Row className=" overflow-hidden min-h-screen">
      <Flex className="w-full">
        <div className="w-6/12 h-full"
        style={{
          backgroundColor: currentTheme?.mute_background || "#f0f0f0"
        }}
        >
          {/* IMAGE OR SOMETHING */}
        </div>
        <Layout className="w-6/12 h-full justify-center items-center flex flex-col">
          <Outlet />
        </Layout>
      </Flex>
    </Row>
  );
};

export default AuthLayout;
