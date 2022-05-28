import React from "react";
import Backdrop from "../button/Backdrop";

const SuccessModal = () => {
  return (
    <>
      <Backdrop />
      <div className="modal modal-medium">
        <div className="modal-span" data-cy="modal-information">
          <span className="info-icon" data-cy="modal-information-icon"></span>
          <p data-cy="modal-information-title">Activity Berhasil dihapus!</p>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
