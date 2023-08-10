import { Container, Grid } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import FadeTrancition from "../components/Transition/FadeTrancition";
import Dummy from "./Dummy";
import AppAction from "../components/OptionsMenu/AppAction";

// eslint-disable-next-line react/prop-types
const AppInRolePage = ({ applications }) => {
  const location = useLocation();

  const createAppAction = (a) => {
    const ret = (
      <Grid.Col md={6} lg={4} key={a.id}>
        <AppAction title={a.name} text={a.description} icon={<IconSettings size={20} />} h={100} link={`${a.id}`} />
      </Grid.Col>
    );

    return ret;
  };

  const createAppRoute = (a) => {
    const ret = (
      <Route
        key={a.id}
        path={`${a.id}`}
        element={
          <ProtectedRoute>
            <FadeTrancition>
              <Dummy title={a.name} />
            </FadeTrancition>
          </ProtectedRoute>
        }
      />
    );

    return ret;
  };

  const appComponents = () => {
    // eslint-disable-next-line react/prop-types
    const ret = applications ? applications.map((o) => createAppAction(o)) : null;
    return(ret);
  };

  const appRoutes = () => {
    // eslint-disable-next-line react/prop-types
    const ret = applications ? applications.map((o) => createAppRoute(o)) : null;
    return(ret);
  };

  return (
    <Container size={"xl"}>
      <Routes location={location} key={location.pathname}>
        <Route
          path={"/"}
          element={
            <ProtectedRoute>
              <FadeTrancition>
                <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
                  {appComponents()}
                </Grid>
              </FadeTrancition>
            </ProtectedRoute>
          }
        />
        {appRoutes()}
      </Routes>
    </Container>
  );
};

export default AppInRolePage;
