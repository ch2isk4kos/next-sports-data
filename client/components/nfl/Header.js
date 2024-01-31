"use client";
import { useState, useEffect } from "react";
import { getNFLNews } from "@/lib/api/getNFLNews";

const Header = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getNFLNews().then((res) => setArticles(res));
  }, []);

  console.log("NFL articles:", articles);
  return (
    <div>
      <h1>NFL News</h1>
      {/*  */}
      {/*  */}
    </div>
  );
};

export default Header;
