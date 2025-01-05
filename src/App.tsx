import { RouterProvider } from "react-router-dom"
import router from "./router"
import { ConfigProvider } from "antd"
import { useTheme } from "./providers/ThemeProvider"

const App = () => {
  const {currentTheme} = useTheme()
  return (
    <ConfigProvider 
      theme={{
        token: {
          colorPrimary: currentTheme?.color_primary,
          colorInfo: currentTheme?.color_primary,
          colorLink: currentTheme?.color_primary,
          colorTextBase: currentTheme?.color_text,
    
          // Background colors
          colorBgBase: currentTheme?.color_bg,
          // colorBgContainer: currentTheme?.mute_background,
          colorBgLayout: currentTheme?.color_bg,
    
          // Text colors
          colorText: currentTheme?.color_text,
          colorTextSecondary: currentTheme?.mute_color_text_secondary,
          colorTextHeading: currentTheme?.color_text, 
          
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App