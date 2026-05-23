import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;