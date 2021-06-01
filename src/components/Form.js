function Form(props) {
  const {setPage} = props;
    return (
      <div className="form-component">
        <h1>Datos de la compañía o persona para el registro</h1>
        <div className="div-info card bg-info">
        <p>Por favor actualizar el formulario con los datos de la persona natural o jurídica</p>
        <p>Los campos marcados con asterisco(*) son obligatorios</p>
        </div>
        
        <div className="div-register">
        <label>Tipo de documento</label>
        <input></input>
        <label>Número de documento</label>
        <input></input>
        <label>Nombre de la empresa</label>
        <input></input>
        <label>Primer nombre</label>
        <input></input>
        <label>Segundo nombre</label>
        <input></input>
        <label>Primer apellido</label>
        <input></input>
        <label>Segundo apellido</label>
        <input></input>
        <label>Correo electrónico</label>
        <input></input>
        <button className="mt-3 btn btn-danger" onClick={()=>setPage(0)}>Continuar {'>'}</button>
        </div>
      </div>
    );
  }
  
  export default Form;