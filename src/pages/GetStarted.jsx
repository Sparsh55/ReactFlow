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

];

const nodesData = [
  {
    id: "1",
    position: { x: -300, y: 400 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "green",
      color: "black",
      width: 150,
      height: 150,
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    },
    
  },
  {
    id: "2",
    position: { x: -300, y: 580 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "orange",
      color: "black",
      width: 150,
      height: 150,
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    },
    
  },{
    id: "3",
    position: { x: -300, y: 760 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "yellow",
      color: "black",
      width: 150,
      height: 150,
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    },
    
  },{
    id: "4",
    position: { x: -300, y: 940 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "blue",
      color: "black",
      width: 150,
      height: 150,
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    }, 
    
  },{
    id: "5",
    position: { x: -50, y: 300 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "#A7C7E7",
      color: "black",
      width: 1500,
      height: 80,
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    }, 
    
  },{
    id: "6",
    position: { x: -50, y: 400 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "green",
      color: "black",
      width: 500,
      height: 50,
      borderRadius: "20px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    }, 
    
  },
  {
    id: "7",
    position: { x: 60, y: 470 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "green",
      color: "black",
      width: 500,
      height: 50,
      borderRadius: "20px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    }, 
    
  },
  {
    id: "8",
    position: { x: 400, y: 580 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "orange",
      color: "black",
      width: 500,
      height: 50,
      borderRadius: "20px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    }, 
    
  },
  {
    id: "9",
    position: { x: 600, y: 650 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "orange",
      color: "black",
      width: 500,
      height: 50,
      borderRadius: "20px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    }, 
    
  },{
    id: "10",
    position: { x: 200, y: 750 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "yellow",
      color: "black",
      width: 500,
      height: 50,
      borderRadius: "20px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    }, 
    
  },{
    id: "11",
    position: { x: 500, y: 820 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "yellow",
      color: "black",
      width: 500,
      height: 50,
      borderRadius: "20px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    }, 
    
  },{
    id: "12",
    position: { x: 950, y: 940 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "blue",
      color: "black",
      width: 500,
      height: 50,
      borderRadius: "20px",
      transition: "transform 0.3s",
      cursor: "pointer",
      hover: { background: "yellow" },
    }, 
    
  },{
    id: "13",
    position: { x: 750, y: 1010 },
    data: {
      label: "Raw Materials",
      info: "The initial stage where raw materials are procured.",
    },
    style: {
      background: "blue",
      color: "black",
      width: 500,
      height: 50,
      borderRadius: "20px",
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
          onNodeClick={(event, node) => { if (parseInt(node.id) >= 1 && parseInt(node.id) <= 4) { onNodeClick(event, node); } }}
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
