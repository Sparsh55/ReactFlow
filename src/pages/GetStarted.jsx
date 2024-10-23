import { useEffect, useRef } from 'react';
import * as go from 'gojs';

const GetStarted = () => {
  const diagramRef = useRef(null);
  const diagram = useRef(null);

  useEffect(() => {
    const $ = go.GraphObject.make;

    // Create the diagram only if it doesn't exist
    if (!diagram.current) {
      diagram.current = $(go.Diagram, diagramRef.current, {
        initialAutoScale: go.Diagram.Uniform, // Scale the diagram to fit
        'undoManager.isEnabled': true, // Enable undo & redo
      });

      // Define a simple node template
      diagram.current.nodeTemplate =
        $(go.Node, 'Auto',
          $(go.Shape, 'RoundedRectangle', {
            strokeWidth: 1, stroke: '#333', fill: '#f8f8f8',
          }),
          $(go.TextBlock, {
            margin: 5, font: 'bold 14px sans-serif',
          }, new go.Binding('text', 'label'))
        );

      // Define the links (edges)
      diagram.current.linkTemplate =
        $(go.Link,
          { curve: go.Link.Bezier }, // Use Bezier curve
          $(go.Shape, { strokeWidth: 1.5, stroke: '#333' })
        );

      // Define the nodes
      const nodes = [
        { key: 1, label: 'Raw Material' },
        { key: 2, label: 'Processing' },
        { key: 3, label: 'Quality Control' },
        { key: 4, label: 'Packaging' },
        { key: 5, label: 'Distribution' },
        { key: 6, label: 'Retail' },
      ];

      // Define the links
      const links = [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 5, to: 6 },
      ];

      // Set the model
      diagram.current.model = new go.GraphLinksModel(nodes, links);
    }

    // Cleanup on unmount
    return () => {
      if (diagram.current) {
        diagram.current.div = null; // Remove the association with the div
        diagram.current.clear(); // Clear the diagram instance
        diagram.current = null; // Reset the diagram reference
      }
    };
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <div ref={diagramRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default GetStarted;
