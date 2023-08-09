import { Container, Grid } from "@mantine/core";
import Option from "../components/OptionsMenu/Option";
// import {
//   IconBrandSpeedtest,
//   IconGraph,
//   IconProgress,
//   IconRoute2,
//   IconTruckDelivery,
//   IconLocationFilled,
// } from "@tabler/icons-react";

import { useContext } from "react";
import { AppStateContext } from "../context/AppStateContext";

const Options = () => {
  const { options } = useContext(AppStateContext);

  const createGrid = (o, index) => {
    const ret = (
      <Grid.Col md={6} lg={4} key={index}>
        <Option
          title={o.title}
          text={o.description}
          // icon={icon}
          h={100}
          link={`/main/option${index}`}
        />
      </Grid.Col>
    );

    return ret;
  };

  return (
    <Container size={"xl"}>
      <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        {options ? options.map((o, index) => createGrid(o, index)) : null}
      </Grid>
    </Container>
  );
};

export default Options;
