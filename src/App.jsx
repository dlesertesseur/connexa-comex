import "./App.css";
import "./i18n";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { AppStateContext } from "./context/AppStateContext";
import { Notifications } from "@mantine/notifications";
import { ProtectedRoute } from "./components/ProtectedRoute";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import ResponceNotification from "./components/ResponceNotification";
import { useTranslation } from "react-i18next";

function App() {
  const {t} = useTranslation();
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) => setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [site, setSite] = useState(null);
  const [error, setError] = useState(null);

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Notifications />
        <AppStateContext.Provider
          value={{
            user, setUser,
            error, setError,
            loading, setLoading,
            token, setToken,
            userId, setUserId,
            organization, setOrganization,
            site, setSite
          }}
        >
          <BrowserRouter basename="/connexa-cli/comex">
            {error ? (
              <ResponceNotification
                opened={error}
                onClose={() => {setError(null)}}
                code={error}
                title={t("errors.title")}
                text={error}
              />
            ) : null}
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route exact path="/" element={<SignIn />} />
              <Route
                path="/main/*"
                element={
                  <ProtectedRoute>
                    <Main />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </AppStateContext.Provider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
