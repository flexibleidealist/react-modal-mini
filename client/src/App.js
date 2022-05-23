import { useState } from 'react';
import { Modal } from './Modal.jsx';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowModal(!showModal)}>
        {showModal ? 'close' : 'open'}
      </button>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
