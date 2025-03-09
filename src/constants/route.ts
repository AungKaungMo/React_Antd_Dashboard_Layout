const ROUTE_DASHBOARD = {
  dashboard: "/dashboard",
};

const ROUTE_USERS = {
  user: "/user",
  user_new: "/user/new",
  user_edit: "/user/edit/:id",
  user_detail: "/user/:id",
};

const ROUTE_ROLES = {
  role: "/role",
  role_new: "/role/new",
  role_edit: "/role/edit/:id",
  role_detail: "/role/:id",
};

const ROUTE_PERMISSIONS = {
  permission: "/permission",
  permission_new: "/permission/new",
  permission_edit: "/permission/edit/:id",
  permission_detail: "/permission/:id",
};

const ROUTE_DEPARTMENTS = {
  department: "/department",
  department_new: "/department/new",
  department_edit: "/department/edit/:id",
  department_detail: "/department/:id",
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

const ROUTE_DOCUMENTS = {
  document: "/document",
  document_new: "/document/new",
  document_edit: "/document/edit/:id",
  document_detail: "/document/:id",
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
  ...ROUTE_DOCUMENTS,
  ...ROUTE_USERS,
  ...ROUTE_ROLES,
  ...ROUTE_PERMISSIONS,
  ...ROUTE_DEPARTMENTS,
  ...ROUTE_PROJECTS,
  ...ROUTE_PHASES,
  ...ROUTE_KNOWLEDGES,
  ...ROUTE_KNOWLEDGE_CATEGORIES,
};
