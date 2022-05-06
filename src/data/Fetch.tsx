import axios from "axios";
import React from "react";

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
const FetchPref = (props: any) => {
  const [error, setError] = React.useState<string | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [post, setPost] = React.useState<prefecturesItem | null>(null);
  const [value, setValue] = React.useState<string | null>(null);

  React.useEffect(() => {
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
    const clickCode = Number(e.target.value);
    console.log(clickCode);
    if (clickCode > 0) {
      axios
        .get(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=${clickCode}`,
          {
            headers: {
              "X-API-KEY": `${process.env.REACT_APP_RESAS_API_KEY}`,
            },
          }
        )
        .then((res) => {
          setIsLoaded(true);
          setValue(res.data.result.data[0].data);
          console.log(res.data.result.data[0].data);
        })
        .catch((err) => {
          setIsLoaded(true);
          setError(err.message);
        });
    } else if (clickCode === Number(e.target.value)) {
    }
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
    </div>
  );
};

export default FetchPref;
