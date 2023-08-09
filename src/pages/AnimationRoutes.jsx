import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { AnimatePresence } from "framer-motion";
import FadeTrancition from "../components/Transition/FadeTrancition";
import RolePage from "./RolePage";
import AppInRolePage from "./AppInRolePage";

const AnimationRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence initial={true} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path={"/"}
          element={
            <ProtectedRoute>
              <FadeTrancition>
                <RolePage />
              </FadeTrancition>
            </ProtectedRoute>
          }
        />
        <Route
          path={"applications"}
          element={
            <ProtectedRoute>
              <FadeTrancition>
                <AppInRolePage />
              </FadeTrancition>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimationRoutes;
