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
    let data: Array<number> = [];
    aData.data.map((d) => {
      data.push(d.value);
      categories.push(d.year);
    });
    series.push({
      type: "line",
      name: aData.prefName,
      data: data,
    });
  });
  const options = {
    caption: {
      text: "This chart shows the population trend in Japan.",
    },
    accessibility: {
      description:
        "This chart shows the population trend in Japan. The data is sourced from the RESAS open data portal.",
    },
    title: {
      text: "総人口推移",
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
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default Graph;
