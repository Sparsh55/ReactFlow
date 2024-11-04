import { useState } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";
import NodeInfo from "./NodeInfo";

// import './App.css';

const edges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#3399ff", strokeWidth: 2 },
  },
  {
    id: "2-3",
    source: "2",
    label: "Design",
    target: "3",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#3399ff", strokeWidth: 2 },
  },
  {
    id: "3-4",
    source: "3",
    target: "4",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#3399ff", strokeWidth: 2 },
  },
  {
    id: "4-5",
    source: "4",
    target: "5",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#3399ff", strokeWidth: 2 },
  },
  {
    id: "5-6",
    source: "5",
    target: "6",
    type: "default",
    animated: true,
    style: { stroke: "#3399ff", strokeWidth: 2 },
  },
  {
    id: "6-7",
    source: "3",
    target: "5",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#3399ff", strokeWidth: 2 },
  },
  {
    id: "7-8",
    source: "11",
    target: "8",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#3399ff", strokeWidth: 2 },
  },
  {
    id: "8-9",
    source: "6",
    target: "12",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#3399ff", strokeWidth: 2 },
  },
  {
    id: "9-10",
    source: "5",
    target: "10",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#3399ff", strokeWidth: 2 },
  },
  {
    id: "10-11",
    source: "4",
    target: "7",
    type: "smoothstep",
    animated: true,
    style: { stroke: "#3399ff", strokeWidth: 2 },
  },
];

const nodesData = [
  {
    id: "1",
    position: { x: 50, y: 400 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "#FFE599",
      color: "black",
      width: 150,
      height: 60,
      borderRadius: "15px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    },
  },
  {
    id: "2",
    position: { x: 250, y: 400 },
    data: {
      label: "Cutting",
      info: "Cutting raw materials into required shapes.",
    },
    style: {
      background: "#FFE599",
      color: "black",
      width: 150,
      height: 60,
      borderRadius: "15px",
      transition: "transform 0.3s",
      cursor:"pointer"
    },
  },
  {
    id: "3",
    position: { x: 450, y: 300 },
    data: { label: "Welding", info: "Joining materials together by welding." },
    style: {
      background: "yellow",
      color: "black",
      width: 230,
      height: 50,
      borderRadius: "15px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" }
    },
  },
  {
    id: "4",
    position: { x: 650, y: 400 },
    data: {
      label: "Assembly",
      info: "Assembling welded parts into the final product.",
    },
    style: {
      background: "#FFE599",
      color: "black",
      width: 150,
      height: 60,
      borderRadius: "15px",
      transition: "transform 0.3s",
      border: "null",
      cursor: "pointer",
      hover: { background: "yellow" }
    },
  },
  {
    id: "5",
    position: { x: 550, y: 100 },
    data: {
      label: "Painting",
      info: "Applying paint to the assembled product.",
    },
    style: {
      background: "#FFE599",
      color: "black",
      width: 150,
      height: 60,
      borderRadius: "15px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" }
    },
  },
  {
    id: "6",
    position: { x: 1050, y: 250 },
    data: {
      label: "Quality Control",
      info: "Inspecting the final product to ensure quality standards.",
    },
    style: {
      background: "#FFE599",
      color: "black",
      width: 150,
      height: 60,
      borderRadius: "15px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" }
    },
  },
  {
    id: "7",
    position: { x: 1050, y: 50 },
    data: {
      label: "Quality Control 1",
      info: "Inspecting the final product to ensure quality standards.",
    },
    style: {
      background: "#FFE599",
      color: "black",
      width: 150,
      height: 60,
      borderRadius: "15px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" }
    },
  },
  {
    id: "8",
    position: { x: 50, y: 550 },
    data: {
      label: "Quality Control 2",
      info: "Inspecting the final product to ensure quality standards.",
    },
    style: {
      background: "#FFE599",
      color: "black",
      width: 150,
      height: 60,
      borderRadius: "15px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" }
    },
  },
  {
    id: "9",
    position: { x: 1050, y: 150 },
    data: {
      label: "Quality Control 3",
      info: "Inspecting the final product to ensure quality standards.",
    },
    style: {
      background: "#FFE599",
      color: "black",
      width: 150,
      height: 60,
      borderRadius: "15px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    },
  },
  {
    id: "10",
    position: { x: 250, y: 100 },
    data: {
      label: "Quality Control 4",
      info: "Inspecting the final product to ensure quality standards.",
    },
    style: {
      background: "#FFE599",
      color: "black",
      width: 150,
      height: 60,
      borderRadius: "15px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    },
  },
  {
    id: "11",
    position: { x: 150, y: 220 },
    data: {
      label: "Quality Control 5",
      info: "Inspecting the final product to ensure quality standards.",
    },
    style: {
      background: "#FFE599",
      color: "black",
      width: 150,
      height: 60,
      borderRadius: "15px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    },
  },
  {
    id: "12",
    position: { x: 900, y: 500 },
    data: {
      label: "Quality Control 6",
      info: "Inspecting the final product to ensure quality standards.",
    },
    style: {
      background: "#FFE599",
      color: "black",
      width: 150,
      height: 60,
      borderRadius: "15px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    },
  },
];

const GetStarted = () => {
  const [selectedNode, setSelectedNode] = useState(null);

  const onNodeClick = (event, node) => {
    setSelectedNode(nodesData.find((n) => n.id === node.id));
  };

  const closePanel = () => {
    setSelectedNode(null);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div style={{ width: "100vw", height: "80vh", marginTop: "100px" }}>
        <ReactFlow
          nodes={nodesData}
          edges={edges}
          onNodeClick={onNodeClick}
          style={{ width: "100%", height: "80%" }}
        >
          <MiniMap />

          <Controls />
          <Background />
        </ReactFlow>
        {selectedNode && (
          <NodeInfo nodeData={selectedNode.data} onClose={closePanel} />
        )}
      </div>
      <div
        style={{
          width: "100vw",
          height: "300px",
          backgroundColor: "#002D62",
          marginTop: "-70px",
        }}
      >
        <p style={{ color: "white", textAlign: "center", paddingTop: "30px" }}>
          Designed and developed by Chetan Gupta , {currentYear}, for Ford Motors Company India , All
          right reserved!
        </p>
        <p style={{color: "white", textAlign: "center", marginTop: "-17px"}}> Learn More @<a  href = "https://www.ford.com/">https://www.ford.com</a></p>

      </div>
    </div>
  );
};

export default GetStarted;
