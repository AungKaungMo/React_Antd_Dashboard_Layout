import { Outlet } from "react-router-dom"
import AdminLayout from "./AdminLayout"

const index = () => {
  return (
    <AdminLayout>
        <Outlet />
    </AdminLayout>
  )
}

export default index