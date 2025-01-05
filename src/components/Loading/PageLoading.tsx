import { useTheme } from "../../providers/ThemeProvider"

const PageLoading = () => {
  const { currentTheme } = useTheme()
  return (
    <>
    <div className="loading flex flex-col justify-center items-center h-[80vh]">
        <div className="bounceball"></div>
    <div className="text-primary text-lg">LOADING...</div>
  </div>
  <style>
      {`
        .bounceball::before {
          background-color: ${currentTheme?.color_primary || '#000'};
        }
      `}
    </style>

  </>
  )
}

export default PageLoading