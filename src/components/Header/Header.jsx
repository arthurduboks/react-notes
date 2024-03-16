import { Logo } from "components/Logo/Logo";
import s from "./style.module.css";
import logoSrc from "assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "store/auth/auth-selectors";
import { AuthAPI } from "api/auth";
import { setUser } from "store/auth/auth-slice";

export function Header() {
  const nav = useNavigate();
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signout = () => {
    AuthAPI.signout();
    dispatch(setUser(null));
  };
  const renderAuthProfile = () => {
    return (
      <div>
        <img
          src={`https://api.dicebear.com/5.x/bottts/svg?seed=${user.email}`}
          style={{ width: 30 }}
          className="rounded-circle"
          alt="Profile avatar"
        />
        <div>Hello, {user.email}</div>
        <Link to="#" onClick={signout}>
          Sign out
        </Link>
      </div>
    );
  };
  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo
          onClick={() => nav("/")}
          title="ReactNote"
          subtitle={"Manage your notes"}
          image={logoSrc}
        />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">{renderAuthProfile()}</div>
    </div>
  );
}
