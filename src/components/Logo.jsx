import { Group, Image } from "@mantine/core";
import { config } from "../config/config";

// eslint-disable-next-line react/prop-types
const Logo = ({width = 80}) => {
  return (
    <Group position="center" mx={"xs"} mb={"xs"}>
      <Image src={config.PUBLIC_URL+"/logos/logo.png"} alt="image" width={width} />
    </Group>
  );
};

export default Logo;
