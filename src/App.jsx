// importing libraries
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// importing components
import Layout from "./layouts/Layout";
import Hero from "./Components/Hero/Hero";
import Error from "./Components/Error/Error";
import { useState } from "react";

function App() {
  const [Progress, setProgress] = useState(0);
  return (
    <>
      <LoadingBar
        height={3}
        progress={Progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Hero setProgress={setProgress} />} />
          <Route
            path="sports"
            element={<Hero category="Sports" setProgress={setProgress} />}
          />
          <Route
            path="science"
            element={<Hero category="Science" setProgress={setProgress} />}
          />
          <Route
            path="business"
            element={<Hero category="Business" setProgress={setProgress} />}
          />
          <Route
            path="technology"
            element={<Hero category="Technology" setProgress={setProgress} />}
          />
          <Route
            path="entertainment"
            element={
              <Hero category="Entertainment" setProgress={setProgress} />
            }
          />
          
          <Route
            path="food"
            element={<Hero category="Food" setProgress={setProgress} />}
          />
          <Route
            path="health"
            element={<Hero category="Health" setProgress={setProgress} />}
          />
          <Route
            path="environment"
            element={<Hero category="Environment" setProgress={setProgress} />}
          />
          <Route
            path="politics"
            element={<Hero category="Politics" setProgress={setProgress} />}
          />
          <Route
            path="tourism"
            element={<Hero category="Tourism" setProgress={setProgress} />}
          />
          <Route
            path="world"
            element={<Hero category="World" setProgress={setProgress} />}
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
