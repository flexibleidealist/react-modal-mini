import { useState } from 'react';
import { Modal } from './Modal.jsx';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      {showModal && <Modal setShowModal={setShowModal} />}
      <button onClick={() => setShowModal(!showModal)}>
        {showModal ? 'close' : 'open'}
      </button>
    </div>
  );
}

export default App;
