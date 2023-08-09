import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { AppStateContext } from "../context/AppStateContext";
import FadeTrancition from "../components/Transition/FadeTrancition";
// import Options from "./Options";
import DynamicPage from "./dynamic/DynamicPage";

const AnimationRoutes = () => {
  const { options } = useContext(AppStateContext);
  const location = useLocation();

  const createRoute = (o, index) => {
    const ret = (
      <Route
        key={index}
        path={`/option${index}`}
        element={
          <ProtectedRoute>
            <FadeTrancition>
              {/* <NotImplemented title={o.title} /> */}
              <DynamicPage app={o}/>
            </FadeTrancition>
          </ProtectedRoute>
        }
      />
    );

    return ret;
  };

  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* <Route
          exact
          path="/"
          element={
            <ProtectedRoute>
              <FadeTrancition>
                <Options />
              </FadeTrancition>
            </ProtectedRoute>
          }
        /> */}
        {options ? options.map((o, index) => createRoute(o, index)) : null}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
