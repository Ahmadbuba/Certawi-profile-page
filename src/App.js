import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import UserForm from "./Components/UserForm";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <UserForm />
      <Footer />
    </React.Fragment>
  );
}

export default App;
