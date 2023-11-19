// importing libraries
import { Route, Routes } from "react-router-dom";

// importing components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Error from "./Components/Error";

// importing stylesheet
import "./App.css";
import "./Styles/Hero.css";
import "./Styles/Navbar.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Hero />} />
          <Route path="technology" element={<Hero category="Technology" />} />
          <Route
            path="entertainment"
            element={<Hero category="Entertainment" />}
          />
          <Route path="sports" element={<Hero category="Sports" />} />
          <Route path="science" element={<Hero category="Science" />} />
          <Route path="crime" element={<Hero category="Crime" />} />
          <Route path="domestic" element={<Hero category="Domestic" />} />
          <Route path="education" element={<Hero category="Education" />} />
          <Route path="food" element={<Hero category="Food" />} />
          <Route path="health" element={<Hero category="Health" />} />
          <Route path="environment" element={<Hero category="Environment" />} />
          <Route path="politics" element={<Hero category="Politics" />} />
          <Route path="tourism" element={<Hero category="Tourism" />} />
          <Route path="world" element={<Hero category="World" />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
