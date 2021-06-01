import { useState } from 'react';
import '../App.css';
import Nit from './Nit';
import Form from './Form';

function App() {
  const [page, setPage] = useState(0);
  const [personInfo, setPersonInfo] = useState({});
  return (
    <div className="App">
      {
        (
          () => {
            if (page === 0) return <Nit setPage={setPage} setPersonInfo={setPersonInfo} />;
            return <Form setPage={setPage} personInfo={personInfo} />;
          }
        )()
      }
    </div>
  );
}

export default App;
