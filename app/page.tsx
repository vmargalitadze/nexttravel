import Image from "next/image";

import Info from "@/components/info/Info";
import Dest from "@/components/destinations/Dest";
import Hero from "@/components/hero/Hero";
import Popular from "@/components/popular/Popular";

export default function Home() {
  return (
    <>
    <Hero />
    <Info />
    <Dest />
    <Popular />
    </>
  );
}
