const TextArea = ({ label, state, setState, height='100px'}) => {
    return (
        <div className="form-floating">
            <textarea
                className="form-control"
                placeholder={label}
                value={state}
                onChange={e=>setState(e.target.value)}
                id="floatingTextarea"
                style={{height:'100px'}}
                >
            </textarea>
            <label htmlFor="floatingTextarea">{label}</label>
        </div>
    )
}

export default TextArea