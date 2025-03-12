import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Auth from "./pages/Auth";

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Home user={user} />
            ) : (
              <Auth setUser={setUser} users={users} setUsers={setUsers} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
