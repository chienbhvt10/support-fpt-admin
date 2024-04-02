import HomePage from "@/components/pages/home-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default async function Home() {
  return <HomePage />;
}
