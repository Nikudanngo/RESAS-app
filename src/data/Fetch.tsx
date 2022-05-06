import React, { useState, useEffect } from "react";
import axios from "axios";
import Graph from "./Graph";

interface prefecturesItem {
  result: {
    prefCode: number;
    prefName: string;
  }[];
  message: string;
  statusCode: number;
  body: string;
  forbidden: boolean;
  description: string;
}

const Fetch = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState<prefecturesItem | null>(null);
  const [code, setCode] = useState("");
  useEffect(() => {
    axios
      .get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: {
          "X-API-KEY": `${process.env.REACT_APP_RESAS_API_KEY}`,
        },
      })
      //   "X-API-KEY": `${process.env.REACT_APP_RESAS_API_KEY}`,
      .then((res) => {
        setIsLoaded(true);
        setPost(res.data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err.message);
      });
  }, []);

  if (!post) return <p>Loading...</p>;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(() => e.target.value);
  };
  return (
    <div>
      <ul>
        {post.result.map((item) => (
          <label>
            <input
              onChange={handleChange}
              type="checkbox"
              key={item.prefCode}
              value={item.prefCode}
            />
            {item.prefName}
          </label>
        ))}
      </ul>
      {/* 押した県のcodeを取得 */}
      {/* <p>{code}</p> */}
      <Graph prefCode={code} />
    </div>
  );
};

export default Fetch;
