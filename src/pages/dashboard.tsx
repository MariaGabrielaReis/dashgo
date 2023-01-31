import dynamic from "next/dynamic";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-07-21T00:00:00.000z",
      "2021-07-22T00:00:00.000z",
      "2021-07-23T00:00:00.000z",
      "2021-07-24T00:00:00.000z",
      "2021-07-25T00:00:00.000z",
      "2021-07-26T00:00:00.000z",
      "2021-07-27T00:00:00.000z",
    ],
  },
  fill: {
    opacity: 0.2,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.2,
    },
  },
};

const series = [
  {
    name: "series1",
    data: [31, 120, 10, 28, 51, 18, 109],
  },
];

export default function Dashboard() {
  return (
    <Flex direction={"column"} h={"100vh"}>
      <Header />

      <Flex w={"100%"} my={"6"} maxW={1480} mx={"auto"} px={"6"}>
        <Sidebar />

        <SimpleGrid
          flex={"1"}
          gap={"4"}
          minChildWidth={"320px"}
          alignItems={"flex-start"}
        >
          <Box p={["6", "8"]} pb={"4"} bg={"gray.800"} borderRadius={8}>
            <Text fontSize={"lg"} mb={"4"}>
              Inscritos da semana
            </Text>
            <Chart
              options={options}
              series={series}
              type="area"
              height={160}
              width="100%"
            />
          </Box>
          <Box p={["6", "8"]} pb={"4"} bg={"gray.800"} borderRadius={8}>
            <Text fontSize={"lg"} mb={"4"}>
              Taxa de abertura
            </Text>
            <Chart
              options={options}
              series={series}
              type="area"
              height={160}
              width="100%"
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
