import { ReactNode, useEffect } from "react";
import { createBrowserRouter, useLocation } from "react-router-dom";
import { ErrorPage } from "../pages/errors/Error";
import AdminLayout from "../layouts/admin";
import { delayedLazy } from "../utils/delaylazy";
import AuthLayout from "../layouts/auth/AuthLayout";
import Login from "../pages/auth/Login";

const Dashboard = delayedLazy(() => import("../pages/dashboard/Dashboard"));
const Timeline = delayedLazy(() => import("../pages/timeline/Timeline"));

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageWrapper children={<AuthLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/",
    element: <PageWrapper children={<AdminLayout />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        index: true,
        path: "/timeline",
        element: <Timeline />,
      },
    ],
  },
]);

export default router;
