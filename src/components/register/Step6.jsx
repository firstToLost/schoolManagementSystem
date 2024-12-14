import GuardianRegister from "./GuardianRegister";
import Modal from "../Modal";
import { useState } from "react";
export default function Step6() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <GuardianRegister />
      </Modal>
      <button className="btn-primary" onClick={() => setIsOpen(true)}>
        Create Guardian
      </button>
    </>
  );
}
