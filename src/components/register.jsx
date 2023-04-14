import { useState } from "react";
import { icon } from "../constants";
import {Input} from '../ui' 

const Register = () => {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  return (
    <div className="text-center mt-5">
      <main class="form-signin w-25 m-auto">
        <form>
          <img
            class="mb-2"
            src={icon}
            alt=""
            width="72"
            height="72  "
          />
          <h1 class="h3 mb-3 fw-normal">Please register</h1>

        <Input label={"Username"} state={name} id={'floatingInput'} setState={setName}/>
        <Input label={"Email address"} state={email} type={email} id={'floatingInput'} setState={setEmail}/>
        <Input label={"Password"} state={password} type={'password'} id={'floatingPassword'} setState={setPassword}/>

          <button class="w-100 btn btn-lg btn-primary mt-2" type="submit">
            Register
          </button>
          <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
    </div>
  );
};

export default Register;
