import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import {getIdentityTypes} from "./../data/identityTypeData";

function Form(props) {
  const {setPage} = props;
  const [identityTypeId, setIdentityTypeId] = useState(0);
  const [identityTypes, setIdentityTypes] = useState([]);

  useEffect(() => {
    (
      async ()=>{
        const list = await getIdentityTypes();
        setIdentityTypes(list);
      }
    )();
    }, []);
    if(identityTypes===[]) return <></>;
    return (
      <div className="form-component">
        <h1>Datos de la compañía o persona para el registro</h1>
        <div className="div-info card bg-info">
        <p>Por favor actualizar el formulario con los datos de la persona natural o jurídica</p>
        <p>Los campos marcados con asterisco(*) son obligatorios</p>
        </div>
        
        <div className="div-register">
        <label>Tipo de documento *</label>
        <select value={identityTypeId} onChange={(e)=>setIdentityTypeId(e.target.value)}>
            {
              (identityTypes ?? []).map((type)=>(
                <option value={type.id} key={nanoid()}>{type.type}</option>
              ))
            }
        </select>
        <label>Número de documento *</label>
        <input type="number"></input>
        <label>Nombre de la empresa *</label>
        <input type="text"></input>
        <label>Primer nombre *</label>
        <input type="text"></input>
        <label>Segundo nombre</label>
        <input type="text"></input>
        <label>Primer apellido *</label>
        <input type="text"></input>
        <label>Segundo apellido</label>
        <input type="text"></input>
        <label>Correo electrónico *</label>
        <input type="text"></input>
        <button className="mt-3 btn btn-danger" onClick={()=>setPage(0)}>Continuar {'>'}</button>
        </div>
      </div>
    );
  }
  
  export default Form;