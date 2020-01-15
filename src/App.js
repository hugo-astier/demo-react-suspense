import React, { Suspense } from "react";
import PendingTodos from "./components/pendingTodos";
import CompletedTodos from "./components/completedTodos";
import "./index.css";

function App() {
  return (
    <div className="app">
      <h1>Here are your Todos for today</h1>

      <h3>Pending Todos</h3>
      <Suspense fallback={<h1>Loading Pending Todos...</h1>}>
        <PendingTodos />
      </Suspense>

      <h3>Completed Todos</h3>
      <Suspense fallback={<h1>Loading Completed Todos...</h1>}>
        <CompletedTodos />
      </Suspense>
    </div>
  );
}

export default App;
