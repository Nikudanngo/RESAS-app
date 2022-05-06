import React, { useState, useEffect } from "react";
import axios from "axios";

interface populationItem {
  result: {
    boundaryYear: number;
    data: {
      lbel: string;
      data: {
        year: number;
        value: number;
      };
    };
  }[];
  message: string;
}

const FetchValue = (props: any) => {
  const [post, setPost] = useState<populationItem | null>(null);
  useEffect(() => {
    axios
      .get(
        `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${props.code}`,
        {
          headers: {
            "X-API-KEY": `${process.env.REACT_APP_RESAS_API_KEY}`,
          },
        }
      )
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        setPost(null);
        console.log(err);
      });
  }, [props.value]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <p>{props.setValue(post.result[0].data.lbel)}</p>
    </div>
  );
};
export default FetchValue;
