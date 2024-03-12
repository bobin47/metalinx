"use client"
import Header from "@/components/Header/Header";
import Introduce from "@/components/Introduce/Introduce";
import SimpleSlider from "@/components/Slider/Slider";
import styled from "styled-components"

const Container = styled.div`
  width: 80%;
  margin:0 auto;
`

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <SimpleSlider />
        <Introduce />
      </Container >
    </>

  );
}
