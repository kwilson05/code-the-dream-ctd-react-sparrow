import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<TodoContainer />}></Route>
        <Route path="/new" exact element={<h1>Kasozi is new</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
