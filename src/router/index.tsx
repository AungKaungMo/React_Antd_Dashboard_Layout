import { ReactNode, useEffect } from "react";
import { createRoutesFromElements, Navigate, Route, useLocation, useRoutes } from "react-router-dom";
import { ErrorPage } from "../pages/errors/Error";
import AdminLayout from "../layouts/admin";
import { delayedLazy } from "../utils/delaylazy";
import AuthLayout from "../layouts/auth/AuthLayout";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../components/Route/ProtectedRoute";
import ProjectDetail from "../pages/project/ProjectDetail";
import Project from "../pages/project";
import { useAuthStore } from "../store/auth-store";
import User from "../pages/master-data/user/User";
import Role from "../pages/master-data/role/Role";
import Permission from "../pages/master-data/permission/Permission";
import { ROUTES } from "../constants/route";

const Dashboard = delayedLazy(() => import("../pages/dashboard/Dashboard"));
const Document = delayedLazy(() => import("../pages/document/Document"));

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

type PageProps = {
  children: ReactNode;
};

const PageWrapper = ({ children }: PageProps) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

const DynamicRoutes = () => {
  const { user } = useAuthStore();
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<PageWrapper children={<AuthLayout />} />} errorElement={<ErrorPage />}>
      <Route
          index
          path="/"
          element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace /> } />
      
        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" replace />:<Login />} 
        />
      </Route>
      <Route path="/" element={<PageWrapper children={<AdminLayout />} />} errorElement={<ErrorPage />}>
        <Route
          index
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          index
          path="/document"
          element={<ProtectedRoute element={<Document />} />}
        />
        <Route
          index
          path="/project"
          element={<ProtectedRoute element={<Project />} />}
        />
        <Route
          index
          path="/project/:id"
          element={<ProtectedRoute element={<ProjectDetail />} />}
        />

        {/* MASTER DATA */}
        <Route
          index
          path={ROUTES.user}
          element={<ProtectedRoute element={<User />} />} 
        />
        <Route
          index
          path={ROUTES.role}
          element={<ProtectedRoute element={<Role />} />} 
        />
        <Route
          index
          path={ROUTES.permission}
          element={<ProtectedRoute element={<Permission />} />} 
        />
      </Route>
    </>
  );

  return useRoutes(routes)
}

export default DynamicRoutes;
