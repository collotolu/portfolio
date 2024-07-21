import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./Resume";
import Layout from "../pages/Layout";
import Resumes from "../pages/Resumes"
import Project from "../pages/Project";
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
          <Route
          path="/projects"
          element={
            <Layout>
              <Project/>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
