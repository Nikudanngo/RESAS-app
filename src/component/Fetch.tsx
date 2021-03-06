import axios from "axios";
import React from "react";
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

export interface prefPopulationItem {
  prefName: string;
  data: {
    year: number;
    value: number;
  }[];
}

const Fetch = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [post, setPost] = React.useState<prefecturesItem | null>(null);
  // データを格納するリストを作成
  const [prefPopulationList, setPrefPopulationList] = React.useState<
    prefPopulationItem[]
  >([]);
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
    let dataTmp: prefPopulationItem;
    let isChecked = e.target.checked;
    const clickCode = Number(e.target.value);
    const clickName = String(e.target.name);
    // console.log(clickName);
    // console.log(clickCode);
    // console.log(isChecked);
    if (isChecked) {
      // チェックが入ったら
      axios // APIを叩く
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
          dataTmp = {
            prefName: clickName,
            data: res.data.result.data[0].data,
          };
          setPrefPopulationList((prev) => [...prev, dataTmp]);
          // 確認用
          // console.log(res.data.result.data[0].data);
          // console.log(prefPopulation);
          // console.log(prefList);
        })
        .catch((err) => {
          setIsLoaded(true);
          setError(err.message);
        });
    } else {
      // チェックが外れたら
      setPrefPopulationList((prev) =>
        prev.filter((item) => item.prefName !== clickName)
      );
    }
  };
  return (
    <div>
      <Graph allData={prefPopulationList} />
      <ul style={{ paddingRight: "20px", fontSize: "1em" }}>
        {post.result.map((item, index) => (
          // 折り返しをきれいにする
          <label
            //  mapして要素増やしたらkeyする
            // 中央寄せ
            key={index}
            style={{
              // この辺は無理矢理 ボタン全体のスタイル 縦書き
              display: "inline-block",
              marginBottom: "10px",
              writingMode: "vertical-rl",
              verticalAlign: "top",
              textAlign: "right",
            }}
          >
            <input
              onChange={handleChange} // 押した時に実行する関数
              name={item.prefName} //県名
              type="checkbox" //チェックボックス
              value={item.prefCode} //県コード
              style={{
                // この辺は無理矢理 checkboxのスタイル 中央寄せ調整
                marginRight: "12px",
                writingMode: "vertical-rl",
                verticalAlign: "middle",
              }}
            />
            {/* 県名表示 */}
            {item.prefName}
          </label>
        ))}
      </ul>
    </div>
  );
};

export default Fetch;
