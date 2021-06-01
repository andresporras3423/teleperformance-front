function Nit(props) {
    const {setPage} = props;
    return (
      <div className="nit-component">
          <h1>Inscripción al servicio:</h1>
          <p>Ingrese el NIT de la persona natural o jurídica para la que realizará el trámite, sin incluir el dígito de verificación. Luego selecciones <strong>Continuar</strong> para completar su solicitud.</p>
          <div className="nit-form form-group">
              <label>N.I.T</label>
              <input type="text" className="form-control"></input>
              <button className="btn btn-danger" onClick={()=>setPage(1)}>Continuar {'>'}</button>
          </div>
      </div>
    );
  }
  
  export default Nit;