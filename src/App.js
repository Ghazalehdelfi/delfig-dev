import { Route, Routes } from "react-router-dom";
import { Home, Projects, StoryTime, About } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/projects/storytime"} element={<StoryTime />} />
      </Routes>
    </Layout>
  );
}

export default App;
