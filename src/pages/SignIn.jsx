import { TextInput, PasswordInput, Paper, Group, Button, Alert, Stack, useMantineTheme, Center } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { IconAlertCircle } from "@tabler/icons-react";
import { AppStateContext } from "../context/AppStateContext";
import { signIn } from "../data/Auth";
import { getFromLocalStorage, setToLocalStorage } from "../util";
import Logo from "../components/Logo";
import LanguageSelector from "../components/LanguageSelector";
import Contact from "../components/Contact";

export default function SignIn() {
  const { t } = useTranslation();
  const theme = useMantineTheme();
  const navigate = useNavigate();

  const { token, setUserId, setToken, error, setError } = useContext(AppStateContext);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const authenticate = async (values) => {
    setLoading(true);

    const ret = await signIn(values);

    if (ret.error) {
      setError(ret.message);
    } else {
      setError(null);
      setUserId(ret.user.id);
      setToken(ret.token);

      setToLocalStorage("user", { userId: ret.user.id, token: ret.token });
    }
    setLoading(false);
  };

  useEffect(() => {
    const ret = getFromLocalStorage("user");
    if (ret) {
      setUserId(ret.userId);
      setToken(ret.token);
      navigate("/main");
    }

    setInitialized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, token]);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    // CANBIAR LA VALIDACION DE LA CLAVE a minimo 6 caracteres
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : t("validation.emailFormat")),
      password: (val) => (val.length <= 2 ? t("validation.passwordFormat") : null),
    },
  });

  const ret = initialized ? (
    <Center h={"100vh"}>
      <Stack p={"xl"} align="center" w={"100%"}>
        <Paper sx={{ width: 400 }} withBorder p={30} radius="md" bg={theme.colors.gray[0]}>
          <Logo width={120} />
          <form
            onSubmit={form.onSubmit((values) => {
              authenticate(values);
            })}
          >
            <TextInput
              label={t("label.email")}
              placeholder={t("placeholder.email")}
              onChange={(event) => form.setFieldValue("email", event.currentTarget.value)}
              error={form.errors.email}
              disabled={loading}
            />
            <PasswordInput
              label={t("label.password")}
              placeholder={t("placeholder.password")}
              autoComplete="off"
              mt="md"
              onChange={(event) => form.setFieldValue("password", event.currentTarget.value)}
              error={form.errors.password}
              disabled={loading}
            />

            {/* <Group position="apart" mt="md" >
          <Checkbox label={t("label.keepMeConnected")} disabled={loading}/>
        </Group> */}

            <Button type="submit" fullWidth mt="xl" loading={loading} loaderPosition={"left"}>
              {t("button.signIn")}
            </Button>
          </form>
          {error ? (
            <Alert
              mt={"sm"}
              icon={<IconAlertCircle size={16} />}
              title={t("errors.title")}
              color="red"
              variant="filled"
            >
              {error}
            </Alert>
          ) : null}

          <Group grow mt={"xl"}>
            <LanguageSelector disabled={loading} />
          </Group>
        </Paper>
        <Contact />
      </Stack>
    </Center>
  ) : null;
  return ret;
}
