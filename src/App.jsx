// importing libraries
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
// import 'dotenv/config';

// importing stylesheet
import "./App.css";
// import "./Styles/Navbar.css";
import "./Styles/Hero.css";

// const apiKey = process.env.REACT_APP_NEWS_API;

function App() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route
          exact
          path="/business"
          element={<Hero title="business" />}
        ></Route>
      </Routes> */}
      <Hero title="Trending"/>
      </>
  );
}

export default App;

{
  /* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}> */
}
{
  /* <Route index element={<Hero title="business"/>} /> */
}
{
  /* <Route path="business" element={<Hero />} /> */
}
{
  /* <Route path="technology" element={<Hero title="technology"/>} /> */
}
{
  /* <Route path="entertainment" element={<Hero />} />
          <Route path="sports" element={<Hero />} />
          <Route path="science" element={<Hero />} />
          <Route path="crime" element={<Hero />} />
          <Route path="domestic" element={<Hero />} />
          <Route path="education" element={<Hero />} />
          <Route path="food" element={<Hero />} />
          <Route path="health" element={<Hero />} />
          <Route path="environment" element={<Hero />} />
          <Route path="politics" element={<Hero />} />
          <Route path="top" element={<Hero />} />
          <Route path="tourism" element={<Hero />} />
          <Route path="world" element={<Hero />} /> */
}
{
  /* </Route>
    </Routes> */
}
{
  /* </BrowserRouter> */
}
