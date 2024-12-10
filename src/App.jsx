import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./frontend/pages/HomePage";
import ViewPage from "./frontend/pages/ViewPage";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get("/api")
            .then((response) => setMessage(response.data.message))
            .catch((error) => console.error(error));
    }, []);

    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </Router>
    );
}

export default App;
