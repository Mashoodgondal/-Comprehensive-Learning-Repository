"use client";
import { useState } from "react";
const Page = () => {
  //   const [score, setscore] = useState('');
  const [grade, setgrsde] = useState("");
  const score = 80;
  if (score >= 90) {
    setgrsde("A");
  } else if (score >= 80) {
    setgrsde("B");
  }
  return (
    <div>
      <h1>Check Grades</h1>
      <h1>your grade is {grade}</h1>
    </div>
  );
};

export default Page;
