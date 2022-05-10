import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { prefPopulationItem } from "./Fetch";

interface Props {
  allData: Array<prefPopulationItem>;
}

const Graph = (props: Props) => {
  let series: Highcharts.SeriesOptionsType[] = [];
  let categories: Array<number> = [];
  props.allData.map((aData) => {
    // allData内でmapを回す
    let data: Array<number> = []; // listを作成
    aData.data.map((d) => {
      // aData内のdata内でmapを回す
      data.push(d.value); // dataにvalue(人口数)を追加
      categories.push(d.year); // categoriesにyear(年度)を追加
    });
    series.push({
      // seriesに整理して追加
      type: "line",
      name: aData.prefName,
      data: data,
    });
  });
  const options = {
    chart: {
      backgroundColor: {
        linearGradient: [0, 0, 0, 500],
        stops: [[0, "#fafafa"]],
      },
    },
    title: {
      text: "総人口推移",
    },
    subtitle: {
      text: "参照:https://resas.go.jp/",
    },
    caption: {
      text: "This chart shows the population trend in Japan.",
    },
    xAxis: {
      title: {
        text: "年度",
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: "人口数",
      },
    },
    series: series,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default Graph;
