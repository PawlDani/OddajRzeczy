import React from "react";
import Header from "../common/Header/Header";
// import Footer from "./Footer"; // Import your Footer component
import MultiPageForm from "./Form/Form";

const OddajRzeczy: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <MultiPageForm />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default OddajRzeczy;
