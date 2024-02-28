// importing libraries
import { Route, Routes } from "react-router-dom";

// importing components
import Homepage from "./pages/Homepage";
import Hero from "./Components/Hero/Hero";
import Error from "./Components/Error/Error";

// importing styleheet
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />}>
          <Route index element={<Hero />} />
          <Route path="sports" element={<Hero category="Sports" />} />
          <Route path="science" element={<Hero category="Science" />} />
          <Route path="business" element={<Hero category="Business" />} />
          <Route path="technology" element={<Hero category="Technology" />} />
          <Route
            path="entertainment"
            element={<Hero category="Entertainment" />}
          />
          <Route path="health" element={<Hero category="Health" />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
