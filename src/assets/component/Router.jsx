import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./Resume";
import Layout from "../pages/Layout";
import Resumes from "../pages/Resumes"
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/about"
          element={
            <Layout>
              <Resume />
            </Layout>
          }
        />
        <Route
          path="/resume"
          element={
            <Layout>
              <Resumes />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
