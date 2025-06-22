import React, { useState } from "react";
import Modal from "./Modal";
const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div class="attribution">
          Challenge by{" "}
          <a href="https://github.com/Dhanavardhini" target="_blank">
            Frontend 
          </a>
          . Coded by <a href="https://github.com/Dhanavardhini" target="_blank">Dhanavardhini</a>.
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
