import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function withAuthRequired(Component) {
  return function ProtectedComponent() {
    const nav = useNavigate();
    const user = useSelector((store) => store.authSlice.auth.user);
    useEffect(() => {
      if (!user) {
        nav("/signin");
      }
    }, [user]);

    return user && <Component />;
  };
}
