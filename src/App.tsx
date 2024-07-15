import type { OnConnect } from "reactflow";

import { useCallback } from "react";
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
} from "reactflow";

import "reactflow/dist/style.css";

import { initialNodes, nodeTypes } from "./nodes";
import { initialEdges, edgeTypes } from "./edges";
import NavBar from "./components/NavBar";

export default function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return (
    <main className={`flex flex-col h-full ${localStorage.getItem("themes") === "dark" ? "bg-black" : "bg-white"}`} >
      <NavBar />
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        edges={edges}
        edgeTypes={edgeTypes}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        className={`${localStorage.getItem("theme") === "dark" ? "bg-black" : "bg-white"}`}
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </main>
  );
}
