import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes";
import "./App.css";
import Dashboard from "./Layout/Dashboard";
import Home from "./Layout/Home";
import { useAppSelector } from "./hooks/redux";

function App() {
  const logined = useAppSelector((state) => state.loginRegistrReducer.logined);

  return (
    <>
      {logined ? (
        <Routes>
          {privateRoutes.map(({ path, component }) => {
            return <Route key={path} path={path} element={component} />;
          })}
          <Route path="*" element={<Dashboard />} />;
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map(({ path, component }) => {
            return <Route key={path} path={path} element={component} />;
          })}
          <Route path="*" element={<Home />} />;
        </Routes>
      )}
    </>
  );
}

export default App;
