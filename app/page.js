"use client"
import { use, useRef } from "react";
import { Card } from "@/components/card";
import { Hero } from "@/components/hero";
import { Container } from "@/components/container";
import Header from "@/components/header";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import MobileMenu from "@/components/mobile-menu";

export default function Home() {
  
  const refs = {
    home: useRef(null),
    about: useRef(null),
    portfolio: useRef(null),
    price: useRef(null),
    blog: useRef(null),
  }
  

  const handleScroll = (section) => {
    
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="m-6 flex flex-col gap-6" ref={refs.home}>
      
      <Header onNavigate={handleScroll} />
      
      <div ref={refs.about}>
        <Hero />
      </div>
      <div className="bg-gray-100 rounded-md">
        <div ref={refs.portfolio}>
          <Container/>
          <Card/>
        </div>
      </div>
      <div ref={refs.price}>
        <Experience/>
      </div>
      <div ref={refs.blog}>
        <Footer/>
      </div>
    </div>
  );
}