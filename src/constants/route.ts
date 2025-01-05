const ROUTE_DASHBOARD = {
  dashboard: "/dashboard",
};

const ROUTE_USERS = {
  user: "/user-managements/user",
  user_new: "/user-managements/user/new",
  user_edit: "/user-managements/user/edit/:id",
  user_detail: "/user-managements/user/:id",
};

const ROUTE_ROLES = {
  role: "/role-managements/role",
  role_new: "/role-managements/role/new",
  role_edit: "/role-managements/role/edit/:id",
  role_detail: "/role-managements/role/:id",
};

const ROUTE_PERMISSIONS = {
  permission: "/permission-managements/permission",
  permission_new: "/permission-managements/permission/new",
  permission_edit: "/permission-managements/permission/edit/:id",
  permission_detail: "/permission-managements/permission/:id",
};

const ROUTE_DEPARTMENTS = {
  department: "/department-managements/department",
  department_new: "/department-managements/department/new",
  department_edit: "/department-managements/department/edit/:id",
  department_detail: "/department-managements/department/:id",
};

const ROUTE_PROJECTS = {
  project: "/project",
  project_new: "/project/new",
  project_edit: "/project/edit/:id",
  project_detail: "/project/:id",
};

const ROUTE_PHASES = {
  phase: "/phase",
  phase_new: "/phase/new",
  phase_edit: "/phase/edit/:id",
  phase_detail: "/phase/:id",
};

const ROUTE_TIMELINES = {
  timeline: "/timeline",
  timeline_new: "/timeline/new",
  timeline_edit: "/timeline/edit/:id",
  timeline_detail: "/timeline/:id",
};

const ROUTE_KNOWLEDGES = {
  knowledge: "/knowledge",
  knowledge_new: "/knowledge/new",
  knowledge_edit: "/knowledge/edit/:id",
  knowledge_detail: "/knowledge/:id",
};

const ROUTE_KNOWLEDGE_CATEGORIES = {
  knowledge_category: "/knowledge-category",
  knowledge_category_new: "/knowledge-category/new",
  knowledge_category_edit: "/knowledge-category/edit/:id",
  knowledge_category_detail: "/knowledge-category/:id",
};

export const ROUTES = {
  default: "/",
  ...ROUTE_DASHBOARD,
  ...ROUTE_TIMELINES,
  ...ROUTE_USERS,
  ...ROUTE_ROLES,
  ...ROUTE_PERMISSIONS,
  ...ROUTE_DEPARTMENTS,
  ...ROUTE_PROJECTS,
  ...ROUTE_PHASES,
  ...ROUTE_KNOWLEDGES,
  ...ROUTE_KNOWLEDGE_CATEGORIES,
};
