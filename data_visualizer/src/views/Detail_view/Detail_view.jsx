import {
    Box,
    Flex,
    Image,
    Avatar,
    Text,
    useColorModeValue,
    Tag,
    TagLabel,
    Button,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Stack,
    Divider,
    ButtonGroup
} from "@chakra-ui/react";
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Chart from "apexcharts";

export default function Detail_view(props) {
    let boxBg = useColorModeValue("white !important", "#111c44 !important");
    let mainText = useColorModeValue("gray.800", "white");
    let secondaryText = useColorModeValue("gray.400", "gray.400");
    const navigate = useNavigate();
    const [state, setState] = useState();

    return (
        <Card>
            <CardBody>
                
            </CardBody>
        </Card>
    )
}
