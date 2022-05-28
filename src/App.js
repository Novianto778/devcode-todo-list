import { BrowserRouter } from "react-router-dom";
import Todos from "./container/Todos";
import { ActivitiesProvider } from "./context/activities-context";
import "./styles/App.css";
import "./styles/normalize.css";

function App() {
  return (
    <ActivitiesProvider>
      <Todos />
    </ActivitiesProvider>
  );
}

export default App;
