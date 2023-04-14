
const Input = ({label, state, setState, type='text', id}) => {

  return (
    <div class="form-floating">
      <input
        value={state}
        onChange={e=>setState(e.target.value)}
        type={type}
        class="form-control"
        id={id}
        placeholder="username"
      />
      <label for="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
