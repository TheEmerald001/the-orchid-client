import { Route, Routes } from "react-router-dom";
// import Footer from "./Footer";
import Header from "./Header";
import ViewPage from "./viewPage";
import LoginForm from "./LogInForm";
import FlowerContainer from "./FlowerContainer";
import SignUp from "./SignUpForm";
import FlowerPage from "./FlowerPage";
import { useContext } from "react";
import { useEffect } from "react";
import { FlowerContext } from "./FlowerContext";



function App() {

  const { user, setUser } = useContext(FlowerContext);

  useEffect(() => {
    // auto-login
    fetch("/me")
      .then((r) => {
      if (r.ok) {
        r.json().then((loggedUser) => setUser(loggedUser));
      }
    });
  }, [setUser]);
  return (

    <>

      <div className="App">
      <Header loggedUser={user} />
        <Routes>
          <Route path="/" element={ <ViewPage/>}/>
          <Route path="/flowers" element={<FlowerContainer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/flowers/:id" element={<FlowerPage />} />
          {/* <Route path="/flowers/:id"element={<ReviewUs />}/> */}
        </Routes>
      </div>
    
    </>
     
  );
}

export default App;