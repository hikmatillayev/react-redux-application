import { useState } from "react";
import { icon } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { registerUserStart } from "../slice/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isloading } = useSelector((state) => state.auth);

  const registerHandler = (e) => {
    e.preventDefault();
    dispatch(registerUserStart());
  };

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={icon} alt="" width="72" height="72  " />
          <h1 className="h3 mb-3 fw-normal">Please register</h1>

          <Input
            label={"Username"}
            state={name}
            id={"floatingInput"}
            setState={setName}
          />
          <Input
            label={"Email address"}
            state={email}
            type={email}
            id={"floatingInput"}
            setState={setEmail}
          />
          <Input
            label={"Password"}
            state={password}
            type={"password"}
            id={"floatingPassword"}
            setState={setPassword}
          />

          <button
            disabled={isloading}
            onClick={registerHandler}
            className="w-100 btn btn-lg btn-primary mt-2"
            type="submit"
          >
            {isloading ? 'loading...' : 'Register'}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
