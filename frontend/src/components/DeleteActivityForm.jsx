import Modal from "./Modal";

const DeleteActivityForm = ({ onClose, id, deleteActivity }) => {
  return (
    <Modal onClose={onClose}>
      <h1>Delete task?</h1>
      <form
        onSubmit={() => {
          deleteActivity(id);
        }}
      >
        <p>Chart data will also be deleted if any data exists.</p>
        <button onClick={onClose}>Cancel</button>
        <button type="submit">Delete</button>
      </form>
    </Modal>
  );
};

export default DeleteActivityForm;
