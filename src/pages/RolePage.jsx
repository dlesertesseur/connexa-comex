import { Container, Grid } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { AppStateContext } from "../context/AppStateContext";
import { IconAppsFilled } from "@tabler/icons-react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import RoleAction from "../components/OptionsMenu/RoleAction";
import FadeTrancition from "../components/Transition/FadeTrancition";

const RolePage = () => {
  const location = useLocation();
  const { site } = useContext(AppStateContext);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setRoles(site?.roles);
  }, [site]);

  const createRoleAction = (o, index) => {
    const ret = (
      <Grid.Col md={6} lg={4} key={index}>
        <RoleAction
          applications={o.applications}
          title={o.name}
          text={o.groupName}
          icon={<IconAppsFilled size={20} />}
          h={100}
          link={`./applications`}
        />
      </Grid.Col>
    );

    return ret;
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
                  {roles ? roles.map((o, index) => createRoleAction(o, index)) : null}
                </Grid>
              </FadeTrancition>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Container>
  );
};

export default RolePage;
