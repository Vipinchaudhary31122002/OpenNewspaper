// importing libraries
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

// importing components
import Layout from "./layouts/Layout";
import Hero from "./Components/Hero/Hero";
import Error from "./Components/Error/Error";

// importing styleheet
import "./App.css"

function App() {
  // usestate hook for mainting the progress for loading bar
  const [Progress, setProgress] = useState(0);
  return (
    <>
      {/* loadingbar element */}
      <LoadingBar
        height={5}
        progress={Progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {/* routing of all the pages */}
      <Routes>
        {/* default route */}
        <Route exact path="/" element={<Layout />}>
          {/* default page to render on default route */}
          <Route index element={<Hero setProgress={setProgress} />} />
          {/* sports route */}
          <Route
            path="sports"
            element={<Hero category="Sports" setProgress={setProgress} />}
          />
          {/* scicene route */}
          <Route
            path="science"
            element={<Hero category="Science" setProgress={setProgress} />}
          />
          {/* business route */}
          <Route
            path="business"
            element={<Hero category="Business" setProgress={setProgress} />}
          />
          {/* technology route */}
          <Route
            path="technology"
            element={<Hero category="Technology" setProgress={setProgress} />}
          />
          {/* entertainment route */}
          <Route
            path="entertainment"
            element={
              <Hero category="Entertainment" setProgress={setProgress} />
            }
          />
          {/* health route */}
          <Route
            path="health"
            element={
              <Hero category="Health" setProgress={setProgress} />
            }
          />
          {/* error route if any error occurs */}
          <Route path="*" element={<Error />} />
        </Route>
        {/* error route if any error occurs */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
