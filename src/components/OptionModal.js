import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  // '!!' real boolean values. For instance: !!'text'-> true or '!!undefined' -> false
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleCloseModal}
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCloseModal}>Okay</button>
  </Modal>
);

export default OptionModal;
