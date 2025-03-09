export type LoginType = {
  emp_id: string;
  password: string;
  // remember?: boolean;
};

export type AuthStateType = {
  user: {
    id: string;
    name: string;
    token: string;
    role: string[];
    permissions: string[];
  } | null;
  setUser: (user: {
    id: string;
    name: string;
    token: string;
    role: string[];
    permissions: string[];
  }) => void;
  logout: () => void;
};
