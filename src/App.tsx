import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SeoCalculator from "./components/pages/SeoCalculator";


const App = () => {

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="seo" element={<SeoCalculator />} />
      </Routes>
    </Router>
  );
};

export default App;
