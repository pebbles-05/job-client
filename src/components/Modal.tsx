const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-background-dark/90 flex justify-center items-center">
      {children}
    </div>
  );
};
export default Modal;
