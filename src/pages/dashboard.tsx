import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
// THEME PARA IMPORTAR AS CORES DO CHAKRA
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"),{
    // DESATIVAR O SERVER SIDE RENDERING
    ssr:false
})

const options = {
    chart:{
        toolbar:{
            // REMOVER O MENU QUE TINHA DENTRO DO GRAFICO
            show:false
        },
        // TIRAR O ZOOM DO GRAFICO
        // zoom:{
        //     enabled:false
        // },
        foreColor:theme.colors.gray[500]
    },
    grid:{
        // DESATIVAR AS LINHAS DO GRAFICO
        show:false
    },
    dataLabels:{
        // REMOVER OS NUMEROS QUE APARECEM NO GRAFICO
        enabled:false
    },
    tooltip:{
        // DESABILITAR EFEITOS PARA QUANDO O USUARIO PASSAR O MOUSE EM CIMA DO GRAFICO
        enabled:false
    },
    xaxis:{
        type:'datetime',
        axisBorder:{
            // BORDAR DA PARTE DEBAIXO DO GRAFICO
            color:theme.colors.gray[600]
        },
        axisTicks:{
            color:theme.colors.gray[600]
        },
        categories:[
            // DIAS DO GRAFICO
            "2021-03-18T00:00:00.00Z",
            "2021-03-19T00:00:00.00Z",
            "2021-03-20T00:00:00.00Z",
            "2021-03-21T00:00:00.00Z",
            "2021-03-22T00:00:00.00Z",
            "2021-03-23T00:00:00.00Z",
            "2021-03-24T00:00:00.00Z"
        ]
    },
    fill:{
        opacity:0.3,
        type:"gradient",
        gradient:{
            shade:"dark",
            opacityFrom:0.7,
            opacityTo:0.3
        }
    }
}

const series = [
    {
        name: "series1",
        data: [31, 120, 10, 28, 61, 18, 109]
}

]

export default function Dashboard() {


    return (
        <Flex direction={"column"} h="100vh">
            <Header />
            <Flex w="100%" my="6" maxW="1480" mx="auto" px="6">
                <Sidebar />
                <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignContent={"flex-start"}>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius="8"
                        pb="4"
                    >
                        <Text fontSize={"lg"} mb="4">
                            Inscritos da semana
                        </Text>
                        <Chart type="area" height="160" options={options} series={series} />
                    </Box>
                    <Box
                        p="8"
                        bg="gray.800"
                        borderRadius="8"
                    >
                        <Text fontSize={"lg"} mb="4">
                            Taxa de abertura
                        </Text>
                        <Chart type="area" height="160" options={options} series={series} />
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}