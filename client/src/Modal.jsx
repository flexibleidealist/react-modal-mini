export const Modal = ({ setShowModal }) => {
  return (
    <div className="modal" onClick={() => setShowModal(false)}>
      <p>I'm a modal!</p>
    </div>
  );
};
