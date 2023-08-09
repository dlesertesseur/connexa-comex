import { Group, Image, Text } from "@mantine/core";
import { config } from "../config/config";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <Group position="center">
      <Image
        src={config.PUBLIC_URL + "/logos/zeetrex.png"}
        alt="logo"
        width={70}
        component="a"
        href={t("label.url")}
        target="_blank"
      />
      <Text size={"xs"} weight={500} color="gray">
        {t("label.copyright")}
      </Text>
    </Group>
  );
};

export default Contact;
