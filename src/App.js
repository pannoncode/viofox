import React from "react";

import MainLayout from "./components/MainLayout/MainLayout";
import MainHeader from "./components/Header/MainHeader";
import AboutMe from "./components/ContentBody/AboutMe";
import MyWorks from "./components/ContentBody/MyWorks";
import ContactMe from "./components/ContentBody/ContactMe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <MainLayout>
      <MainHeader />
      <AboutMe />
      <MyWorks />
      <ContactMe />
      <Footer />
    </MainLayout>
  );
}

export default App;
