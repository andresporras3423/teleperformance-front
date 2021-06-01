import {useState} from 'react';
import {getPerson} from "./../data/personData";

function Nit(props) {
    const {setPage} = props;
    const [nit, setNit] = useState("");

    const findPerson = async ()=>{
      const data = await getPerson(nit);
      if(data['error']) window.alert(data['error']);
    };

    return (
      <div className="nit-component">
          <h1>Inscripción al servicio:</h1>
          <p>Ingrese el NIT de la persona natural o jurídica para la que realizará el trámite, sin incluir el dígito de verificación. Luego selecciones <strong>Continuar</strong> para completar su solicitud.</p>
          <div className="nit-form form-group">
              <label>N.I.T</label>
              <input type="text" className="form-control" value={nit} onChange={(e)=>setNit(e.target.value)}></input>
              <button className="mt-3 btn btn-danger" onClick={()=>findPerson()}>Continuar {'>'}</button>
          </div>
      </div>
    );
  }
  
  export default Nit;