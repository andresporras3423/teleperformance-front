import {useState} from 'react';
import './../App.css';
import Nit from './Nit';
import Form from './Form';

function App() {
  const [page, setPage] = useState(0);
  return (
    <div className="App">
      {
        (
          ()=>{
            if(page===0) return <Nit page={page} setPage={setPage}></Nit>;
            return <Form page={page} setPage={setPage}></Form>;
          }
        )()
      }
    </div>
  );
}

export default App;
