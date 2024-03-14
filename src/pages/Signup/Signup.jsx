import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { Link, useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { Input } from "components/Input/Input";
import { AuthLayout } from "layouts/AuthLayout/AuthLayout";
import { useState } from "react";
import { AuthAPI } from "api/auth";
import { setUser } from "store/auth/auth-slice";
import { useDispatch } from "react-redux";
import { toast } from "utils/sweet-alert";

export function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");
  const dispatch = useDispatch();
  const nav = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    if (password === passwordRep) {
      try {
        const user = await AuthAPI.signup(email, password);
        dispatch(setUser(user));
        await toast("success", "Sign up successful. Welcome!");
        nav("/");
      } catch (err) {
        toast("error", err.message);
      }
    } else {
      toast("error", "Passwords don't match.");
    }
  };
  // Form
  const form = (
    <div className={s.formContainer}>
      <h2 className={s.title}>
        Sign up <br />
        to access your team notes
      </h2>
      <form onSubmit={submit} className={s.formGroup}>
        <Input placeholder={"Email"} onTextChange={setEmail} />
        <Input
          placeholder={"Password"}
          type="password"
          onTextChange={setPassword}
        />
        <Input
          placeholder={"Reenter Password"}
          type="password"
          onTextChange={setPasswordRep}
        />
        <ButtonPrimary type="submit" className={s.button}>
          Sign up!
        </ButtonPrimary>
        <span>
          Already have an account? <Link to={"/signin"}>Signin</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
}
