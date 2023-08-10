import { Container, Grid } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../context/AppStateContext";
import { IconAppsFilled } from "@tabler/icons-react";
import { ActivePage } from "../config/values";
import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import RoleAction from "../components/OptionsMenu/RoleAction";
import FadeTrancition from "../components/Transition/FadeTrancition";
import AppInRolePage from "./AppInRolePage";

const RolePage = () => {
  const location = useLocation();
  const { site, setActivePage } = useContext(AppStateContext);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    setRoles(site?.roles);
  }, [site]);

  useEffect(() => {
    setActivePage(ActivePage.role);
  }, [setActivePage]);

  const createRoleAction = (o, index) => {
    const ret = (
      <Grid.Col md={6} lg={4} key={index}>
        <RoleAction
          applications={o.applications}
          title={o.name}
          text={o.groupName}
          icon={<IconAppsFilled size={20} />}
          h={100}
          link={`${o.id}`}
        />
      </Grid.Col>
    );

    return ret;
  };

  const createRoleRoute = (a) => {
    const ret = (
      <Route
        key={a.id}
        path={`${a.id}/*`}
        element={
          <ProtectedRoute>
            <FadeTrancition>
              <AppInRolePage applications={a.applications}/>
            </FadeTrancition>
          </ProtectedRoute>
        }
      />
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
                  {roles ? roles.map((o, index) => createRoleAction(o, index)) : null}
                </Grid>
              </FadeTrancition>
            </ProtectedRoute>
          }
        />
        {roles ? roles.map((o) => createRoleRoute(o)) : null}
      </Routes>
    </Container>
  );
};

export default RolePage;
