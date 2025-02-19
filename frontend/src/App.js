import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ecommerce from "./pages/Ecommerce";
import MultiStepForm from "./pages/MultiStepForm";
import Todo from "./pages/Todo.js";
import Weather from "./pages/Weather";
import LandingPage from "./pages/LandingPage.js";
import ExpensiveTracker from "./pages/ExpensiveTracker.js";
import Form from "./components/Form.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/todoApp" Component={Todo} />
        <Route path="/weather" Component={Weather} />
        <Route path="/multiStepForm" Component={MultiStepForm} />
        <Route path="/expensiveTracker" Component={ExpensiveTracker} />
        <Route path="/Ecommerce" Component={Ecommerce} />
        <Route path="/form" element={Form} />
      </Routes>
    </Router>
  );
}

export default App;
