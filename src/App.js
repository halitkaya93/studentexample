import React from 'react';
import { useState } from 'react';
import Table from './components/Table';
import 'bootstrap/dist/css/bootstrap.css';

let id =1;
function App() {
  const [ogrenci, setOgrenci] = useState({});
  const [ogrenciler, setOgrenciler] = useState([]);
  //const [id,setId] = useState(1);  
  return (    
      <div className="container">
        <div className="form-group">
          <label htmlFor='ad'>Ad</label>
          <input id='ad' type="text" className='form-control' placeholder='Ad' onChange={(e) => setOgrenci({...ogrenci, ad: e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor='soyad'>Soyad</label>
          <input id='soyad' type="text" className='form-control' placeholder='Soyad'onChange={(e)=>setOgrenci({...ogrenci, soyad: e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor='sinif'>Sınıf</label>
          <input id='sinif' type="text" className='form-control' placeholder='Sınıf' onChange={(e)=>setOgrenci({...ogrenci, sinif: e.target.value})} />
        </div>
        <button type="button" className="btn btn-primary btn-lg" onClick={(e) => {     
        //let sonEleman = ogrenciler[ogrenciler.length-1]; 
        //setId(id+1);
        id++;
        setOgrenci({...ogrenci, id: id });
        setOgrenciler([...ogrenciler, ogrenci]);
        }}>Ekle</button>

        <h3>Ad:{ogrenci?.ad} Soyad:{ogrenci?.soyad} Sınıf:{ogrenci?.sinif}
        </h3> 
        <Table ogrenciler={ogrenciler}/> 
    </div>
 
  );
}

export default App;
