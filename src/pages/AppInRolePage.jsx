import { Container, Grid } from "@mantine/core";
import { useContext } from "react";
import { AppStateContext } from "../context/AppStateContext";
import { IconSettings } from "@tabler/icons-react";
import RoleAction from "../components/OptionsMenu/RoleAction";
import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import FadeTrancition from "../components/Transition/FadeTrancition";

const AppInRolePage = () => {
  const location = useLocation();
  const { applications } = useContext(AppStateContext);

  // useEffect(() => {
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  //   setRoles(site?.roles);
  // }, [applications]);

  const createAppAction = (a, index) => {
    const ret = (
      <Grid.Col md={6} lg={4} key={index}>
        <RoleAction
          title={a.name}
          text={a.description}
          icon={<IconSettings size={20} />}
          h={100}
          link={`./${a.path}`}
        />
      </Grid.Col>
    );

    return ret;
  };

  return (
    <Container size={"xl"}>
      <Routes location={location} key={location.pathname}>
        <Route
          path={"/*"}
          element={
            <ProtectedRoute>
              <FadeTrancition>
                <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
                  {applications ? applications.map((o, index) => createAppAction(o, index)) : null}
                </Grid>
              </FadeTrancition>
            </ProtectedRoute>
          }
        />
        {/* <Route
          path={"applications"}
          element={
            <ProtectedRoute>
              <FadeTrancition>
                <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
                  {roles ? roles.map((o, index) => createAppAction(o, index)) : null}
                </Grid>
              </FadeTrancition>
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </Container>
  );
};

export default AppInRolePage;
