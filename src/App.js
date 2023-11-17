import './App.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className='help'>
      <div className='one'>
        <button onClick={()=>setShow(false)} className={`btn ${show?"show":"not-show"}`}>Match Preference</button>
        <button onClick={()=>setShow(true)} className={`btn ${!show?"not-show":"show"}`}>save</button>
      </div>
      <div className={`two ${!show?"level-show":""}`}>
      <button className={`btn`}>Entry Level</button>
      <button className={`btn`}>Employer Type</button>
      <button className={`btn`}>Location</button>
      </div>
      <div className={`three ${!show?'submit-show':'submit-not-show'}`}>
      <button className={`btn`}>Upload</button>
      <button className={`btn`}>Submit</button>
      </div>
    </div>
  );
}

export default App;
