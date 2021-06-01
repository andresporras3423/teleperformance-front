import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { getIdentityTypes } from '../data/identityTypeData';
import { updatePerson } from '../data/personData';

function Form(props) {
  const { setPage, personInfo } = props;
  const [identityTypeId, setIdentityTypeId] = useState('0');
  const [identityNumber, setIdentityNumber] = useState('0');
  const [companyName, setCompanyName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [firstLastName, setFirstLastName] = useState('');
  const [secondLastName, setSecondLastName] = useState('');
  const [email, setEmail] = useState('');
  const [allowPhoneMessage, setAllowPhoneMessage] = useState(false);
  const [allowEmailMessage, setAllowEmailMessage] = useState(false);
  const [identityTypes, setIdentityTypes] = useState([]);
  const nullConverter = {"": null};


  useEffect(() => {
    (
      async () => {
        setIdentityTypeId(String(personInfo.identityTypeId));
        setIdentityNumber(String(personInfo.identityNumber));
        setCompanyName(personInfo.companyName ?? '');
        setFirstName(personInfo.firstName ?? '');
        setSecondName(personInfo.secondName ?? '');
        setFirstLastName(personInfo.firstLastName ?? '');
        setSecondLastName(personInfo.secondLastName ?? '');
        setEmail(personInfo.email);
        setAllowPhoneMessage(personInfo.allowPhoneMessage);
        setAllowEmailMessage(personInfo.allowEmailMessage);
        const list = await getIdentityTypes();
        setIdentityTypes(list);
      }
    )();
  }, []);

  const updateIdentityTypeId = (newId)=>{
    setIdentityTypeId(newId);
    if(newId==="2" || newId==="3"){
      setFirstName("");
      setSecondName("");
      setFirstLastName("");
      setSecondLastName("");
    }else{
      setCompanyName("");
    }
  };

  const updatePersonInfo = async ()=>{
    const data = await updatePerson(personInfo.id, identityTypeId, 
      identityNumber, 
      nullConverter[companyName] ?? companyName,
      nullConverter[firstName] ?? firstName, 
      nullConverter[secondName] ?? secondName,
      nullConverter[firstLastName] ?? firstLastName, 
      nullConverter[secondLastName] ?? secondLastName,
      email, allowEmailMessage, allowPhoneMessage);
      if(data==="0"){
        window.alert("registro exitoso");
        setPage(0);
      }
      else window.alert(data);
  }

  const personCompanyName = () => {
    if (identityTypeId === '2' || identityTypeId === '3') {
      return (
        <>
          <label>Nombre de la empresa *</label>
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </>
      );
    }

    return (
      <>
        <label>Primer nombre *</label>
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <label>Segundo nombre</label>
        <input type="text" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
        <label>Primer apellido *</label>
        <input type="text" value={firstLastName} onChange={(e) => setFirstLastName(e.target.value)} />
        <label>Segundo apellido</label>
        <input type="text" value={secondLastName} onChange={(e) => setSecondLastName(e.target.value)} />
      </>
    );
  };

  return (
    <div className="form-component">
      <h1>Datos de la compañía o persona para el registro</h1>
      <div className="div-info card bg-info">
        <p>Por favor actualizar el formulario con los datos de la persona natural o jurídica</p>
        <p>Los campos marcados con asterisco(*) son obligatorios</p>
      </div>

      <div className="div-register">
        <label>Tipo de documento *</label>
        <select value={identityTypeId} onChange={(e) => updateIdentityTypeId(e.target.value)}>
          {
              (identityTypes ?? []).map((type) => (
                <option value={type.id} key={nanoid()}>{type.type}</option>
              ))
            }
        </select>
        <label>Número de documento *</label>
        <input type="number" value={identityNumber} onChange={(e) => setIdentityNumber(e.target.value)} />
        {
          personCompanyName()
        }
        <label>Correo electrónico *</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div>
          <input className="m-1" type="checkbox" checked={allowEmailMessage} onChange={() => setAllowEmailMessage(!allowEmailMessage)}></input>
          <label className="m-1">Autorizo que envíen mensajes al correo registrado</label>
        </div>
        <div>
          <input className="m-1" type="checkbox" checked={allowPhoneMessage} onChange={() => setAllowPhoneMessage(!allowPhoneMessage)}></input>
          <label className="m-1">Autorizo que envíen mensajes al teléfono registrado</label>
        </div>
      </div>
      <div className="buttons">
      <button className="mt-3 btn btn-danger" onClick={() => updatePersonInfo()}>
          Continuar
          {'>'}
      </button>
      <button className="mt-3 btn btn-dark" onClick={() => setPage(0)}>
            {'<'}
            Regresar
      </button>
      </div>
    </div>
  );
}

export default Form;
