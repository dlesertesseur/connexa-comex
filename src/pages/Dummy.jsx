import { Title, Text, Button, Group, Stack } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Dummy({ title }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Stack align="center" justify="center" w={"100%"}>
      <Group w={"100%"} position="center">
        <Title>{title}</Title>
      </Group>
      <Group w={"100%"} position="center">
        <Text color="dimmed" size="lg" align="center">
          {t("label.notImplemented")}
        </Text>
      </Group>

      <Group w={"100%"} position="center">
        <Button
          variant="filled"
          onClick={() => {
            navigate("../");
          }}
        >
          {t("button.back")}
        </Button>
      </Group>
    </Stack>
  );
}
