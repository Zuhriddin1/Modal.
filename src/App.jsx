import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal.jsx";
function App() {
  const [open, setOpen] = useState({
    open: false,
  });
  return (
    <>
      <h1>6.10</h1>
      <Modal open={open} onclose={() => setOpen({ open: false })} />
      <button id="bth" onClick={() => setOpen({ open: true })}>Open modal</button>
      <h1>6.10</h1>
    </>
  );
}
export default App;
