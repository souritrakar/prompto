import { Divider } from "@chakra-ui/react";
import React, {createRef} from "react";
import Header from "./components/front-page/Header";
import Hero from "./components/front-page/Hero";
import PromptArea from "./components/ui/PromptArea";

export default function MainApp(){

    let myRef = createRef()
    return(
        <>
        <Header/>
        <Hero refProp={myRef}/>
        <Divider/>
        <PromptArea refProp={myRef}/>
        </>
    )
}