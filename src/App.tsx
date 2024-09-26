import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "layout/Header/Header";
import Home from "pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";
import Useful from "pages/Article/Article";
import NotFound from "pages/NotFound/NotFound";
import Footer from "layout/Footer/Footer";
import Registration from "pages/Registration/Registration";
// import Article from "pages/Article/Article";
import Test from "pages/Test/Test";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/useful" element={<Useful />} />
        <Route path="/test" element={<Test />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route
          path="/articles/view"
          element={
            <ProtectedRoute allowedRoles={["client", "doctor", "admin"]}>
              <Article />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
