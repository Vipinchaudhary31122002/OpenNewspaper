// import { useEffect } from "react";
// importing components
import NewsCard from "./NewsCard";

// hero component function
const Hero = () => {
  // const apikey = "pub_21753915dabf06c2f3dd6fc9765ed4d9f664a";
  // const getapidata = async () => {
  //   try {
  //     const res = await fetch(
  //       `https://newsdata.io/api/1/news?&apikey=pub_21753915dabf06c2f3dd6fc9765ed4d9f664a&country=in&category=technology&language=en&image=1`
  //     );
  //     const data = await res.json();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getapidata();
  // }, []);
  return (
    <>
      <div className="Hero">
        {/* title below the navbar */}
        <h1>
          <span className="badge bg-primary m-auto">Trending News</span>
        </h1>
        <div className="NewsCardContainer row row-cols-1 row-cols-md-2 g-4">
          <NewsCard />
        </div>
      </div>
    </>
  );
};

export default Hero;
