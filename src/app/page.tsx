// ("Use client");
import React from "react";
import Navbar from "./Component/Navbar";
import Body from "./Component/Body";
import Bodytwo from "./Component/Bodytwo";
import Search from "./Component/Search";
import Footer from "./Component/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Bodytwo />
      <Search />
      <Footer />
    </div>
  );
};

export default page;
