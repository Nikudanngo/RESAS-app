import axios from "axios";
import React from "react";

const baseURL = "https://opendata.resas-portal.go.jp/api/v1/prefectures";

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

export default function TestFetch() {
  const [post, setPost] = React.useState<prefecturesItem | null>(null);

  React.useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          "X-API-KEY": `${process.env.REACT_APP_RESAS_API_KEY}`,
        },
      })
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{process.env.REACT_APP_RESAS_API_KEY}</h1>
      <h1>
        {post.result.map((item) => (
          <li key={item.prefCode}>{item.prefName}</li>
        ))}
      </h1>
      {/* 403 */}
      {/* <p>{post.result.prefCode}</p> */}
      {/* forbidden */}
    </div>
  );
}
