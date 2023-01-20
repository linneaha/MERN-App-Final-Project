import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import EditActivityForm from "./EditActivityForm";
import DeleteActivityForm from "./DeleteActivityForm";

const ActivityConfig = (props) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteForm, setShowDeleteForm] = useState(false);

  const handleEditForm = () => {
    setShowEditForm(true);
  };

  const handleDeleteForm = () => {
    setShowDeleteForm(true);
  };

  return (
    <Modal onClose={props.onClose}>
      <div>
        <div className="modalContent">
          <div onClick={handleEditForm}>Edit</div>
          {showEditForm && <EditActivityForm onClose={props.onClose} />}

          <div onClick={handleDeleteForm}>Delete</div>
          {showDeleteForm && <DeleteActivityForm onClose={props.onClose} />}

          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default ActivityConfig;