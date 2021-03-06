import { useState } from 'react';
import PropTypes from 'prop-types';
import { getPerson } from '../data/personData';

function Nit(props) {
  const { setPage, setPersonInfo } = props;
  const [nit, setNit] = useState('');

  const findPerson = async () => {
    if (nit === '') window.alert('ingrese un valor válido');
    else {
      const data = await getPerson(nit);
      if (data.error) window.alert(data.error);
      else {
        setPersonInfo(data);
        setPage(1);
      }
    }
  };

  return (
    <div className="nit-component">
      <h1>Inscripción al servicio:</h1>
      <p>
        Ingrese el NIT de la persona natural o jurídica para la que realizará el trámite, sin incluir el dígito de verificación. Luego selecciona
        {' '}
        <strong>Continuar</strong>
        {' '}
        para completar su solicitud.
      </p>
      <div className="nit-form form-group">
        <label>N.I.T</label>
        <input type="number" className="form-control" value={nit} onChange={(e) => setNit(e.target.value)} />
      </div>
      <div className="buttons">
        <button className="mt-3 btn btn-danger" onClick={() => findPerson()}>
          Continuar
          {' '}
          <i className="fas fa-arrow-right" />
        </button>
        <button className="mt-3 btn btn-dark">
          <i className="fas fa-arrow-left" />
          {' '}
          Regresar
        </button>
      </div>
    </div>
  );
}

Nit.propTypes = {
  setPage: PropTypes.func,
  setPersonInfo: PropTypes.func,
};

Nit.defaultProps = {
  setPage: null,
  setPersonInfo: null,
};

export default Nit;
