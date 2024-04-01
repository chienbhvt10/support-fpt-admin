"use client";
import { RootStateApp } from "@/redux/store";
import { Flex } from "antd";
import { useSelector } from "react-redux";

interface HomePageProps {}

const HomePage = (_: HomePageProps) => {
  const theme = useSelector((rootState: RootStateApp) => rootState.theme);
  console.log(theme);
  return <Flex>HomePage</Flex>;
};

export default HomePage;
