import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaXmark } from "react-icons/fa6";
const NodeInfo = ({ nodeData, onClose }) => (
  <div
    style={{
      position: "fixed",
      right: 0,
      top: 0,
      bottom: 0,
      width: "300px",
      backgroundColor: "#f4f4f4",
      borderLeft: "1px solid grey",
      padding: "10px",
      boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
      zIndex: 1000,
      transition: "transform 0.3s ease-in-out",
      transform: nodeData ? "translateX(0)" : "translateX(100%)",
    }}
  >
    <button
      onClick={onClose}
      style={{ float: "right", border: "1px solid black" }}
    >
      {" "}
      <FontAwesomeIcon icon={FaXmark} />
      Close
    </button>
    <h1>{nodeData.label}</h1>
    <p>{nodeData.info}</p>
  </div>
);

export default NodeInfo;
