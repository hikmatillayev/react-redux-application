import { useState } from "react";
import { icon } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth";
import AuthService from "../service/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = async (e) => {
    e.preventDefault();
    dispatch(signUserStart());
    const user = { email, password }
    try {
      const response = await AuthService.userLogin(user)
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors));
    }
  };

  return (
    <div className="text-center mt-5">
      <main className="form-signin w-25 m-auto">
        <form>
          <img className="mb-2" src={icon} alt="" width="72" height="72  " />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>

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
            onClick={loginHandler}
            disabled={isLoading}
            className="w-100 btn btn-lg btn-primary mt-2"
            type="submit"
          >
            {isLoading ? 'loading...' : 'Login'}
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Login;
