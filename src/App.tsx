import "./App.css";

import { Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Link to={`/`}>Go to Home</Link>
      <hr />
      <Link to={`/dashboard`}>Go to Dashboard</Link>
    </div>
  );
}

export default App;
