const Input = ({ label, state, setState, type = "text", id }) => {
  return (
    <div className="form-floating">
      <input
        value={state}
        onChange={(e) => setState(e.target.value)}
        type={type}
        className="form-control"
        id={id}
        placeholder="username"
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
