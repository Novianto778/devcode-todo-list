import { useEffect, lazy, Suspense } from "react";
import Header from "../components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Activity from "../components/activity/Activity";
const LazyTodoDetail = lazy(() => import("../components/todo/TodoDetail"));

const Todos = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Activity />} />
          <Route
            path="/detail/:id"
            element={
              <Suspense fallback={<p className="loader"></p>}>
                <LazyTodoDetail />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Todos;
