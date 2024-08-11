import Home from "./components/Home";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);
  const handleRegister = (email, password) => {
    setUser({ email, password });
  };

  return (
    <>
      <Navbar />
      {!user ? <Register registar={handleRegister} /> :<> <Login user={user} /></>}
      {/* <Home/> */}
      <Footer />
    </>
  );
}

export default App;
