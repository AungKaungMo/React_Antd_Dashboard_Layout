import { BrowserRouter } from "react-router-dom"
import { ConfigProvider } from "antd"
import { useTheme } from "./providers/ThemeProvider"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import DynamicRoutes from "./router"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const App = () => {
  const {currentTheme} = useTheme()
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 100 * 60 * 60 * 24
      }
    }
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
          {/* <RouterProvider router={router} /> */}
          <BrowserRouter>
            <DynamicRoutes />
          </BrowserRouter>
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen={false} />

      </QueryClientProvider>

     </>
  )
}

export default App