import React from 'react';
import Hero from "../components/landing/Hero";
import JobGrid from "../components/jobs/JobGrid";
import Features from "../components/landing/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <JobGrid />
      <Features />
    </>
  );
}