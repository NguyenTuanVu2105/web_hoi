import React from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* kick it all off with the root route */}
        {renderRoutes(routes)}
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
