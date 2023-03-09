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
    Heading
} from "@chakra-ui/react";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import moment from 'moment';
export default function Detail_view(props) {
    let boxBg = useColorModeValue("white !important", "#111c44 !important");
    let mainText = useColorModeValue("gray.800", "white");
    let secondaryText = useColorModeValue("gray.400", "gray.400");
    const navigate = useNavigate();
    return (
        <Box>
         detailView
        </Box>
    )
}
