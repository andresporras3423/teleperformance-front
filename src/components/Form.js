import {useState, useEffect} from 'react';
import { nanoid } from 'nanoid';
import {getIdentityTypes} from "./../data/identityTypeData";

function Form(props) {
  const {setPage, personInfo} = props;
  const [identityTypeId, setIdentityTypeId] = useState(0);
  const [identityNumber, setIdentityNumber] = useState(0);
  const [companyName, setCompanyName] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [secondName, setSecondName] = useState(null);
  const [firstLastname, setFirstLastName] = useState(null);
  const [secondLastName, setSecondLastName] = useState(null);
  const [email, setEmail] = useState("");
  const [allowPhoneMessage, setAllowPhoneMessage] = useState(false);
  const [allowEmailMessage, setAllowEmailMessage] = useState(false);
  const [identityTypes, setIdentityTypes] = useState([]);

  useEffect(() => {
    (
      async ()=>{
        setIdentityTypeId(personInfo.identityTypeId);
        setIdentityNumber(personInfo.identityNumber);
        setCompanyName(personInfo.companyName);
        setFirstName(personInfo.firstName);
        setSecondName(personInfo.secondName);
        setFirstLastName(personInfo.firstLastName);
        setSecondLastName(personInfo.secondLastName);
        setEmail(personInfo.email)
        setAllowPhoneMessage(personInfo.allowPhoneMessage);
        setAllowEmailMessage(personInfo.allowEmailMessage);
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
        <input type="number" value={identityNumber} onChange={(e)=>setIdentityNumber(e.target.value)}></input>
        <label>Nombre de la empresa *</label>
        <input type="text" value={companyName} onChange={(e)=>setCompanyName(e.target.value)}></input>
        <label>Primer nombre *</label>
        <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
        <label>Segundo nombre</label>
        <input type="text" value={secondName} onChange={(e)=>setSecondName(e.target.value)}></input>
        <label>Primer apellido *</label>
        <input type="text" value={firstLastname} onChange={(e)=>setFirstLastName(e.target.value)}></input>
        <label>Segundo apellido</label>
        <input type="text" value={secondLastName} onChange={(e)=>setSecondLastName(e.target.value)}></input>
        <label>Correo electrónico *</label>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        <button className="mt-3 btn btn-danger" onClick={()=>setPage(0)}>Continuar {'>'}</button>
        </div>
      </div>
    );
  }
  
  export default Form;