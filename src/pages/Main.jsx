import { AppShell, Footer, Group, Header, useMantineTheme } from "@mantine/core";
import Contact from "../components/Contact";
import AppHeader from "../components/AppHeader";
import PrincipalPanel from "./PrincipalPanel";
import { useContext, useEffect } from "react";
import { AppStateContext } from "../context/AppStateContext";
import { getAuthorizations } from "../data/Auth";
import { findUserById } from "../data/User";

const Main = () => {
  const theme = useMantineTheme();

  const { token, userId, setUser, setError, setOrganization } = useContext(AppStateContext);

  const getData = async () => {
    const params = { token: token, id: userId };
    try {

      const user = await findUserById(params);
      if (user.error) {
        setError(user.error);
      } else {
        setUser(user);
      }

      const organization = await getAuthorizations(params);
      setOrganization(organization[0]);

    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      footer={
        <Footer height={40}>
          <Group align="center" h={"100%"} px={"xs"}>
            <Contact />
          </Group>
        </Footer>
      }
      header={
        <Header height={{ base: 104 , md:114}}>
          <AppHeader />
        </Header>
      }
    >
      <PrincipalPanel />
    </AppShell>
  );
};

export default Main;
