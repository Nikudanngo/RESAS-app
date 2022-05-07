import React from "react";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
type Props = {
  allData: {
    prefName: string;
    data: {
      year: number;
      value: number;
    }[];
  }[];
};

const Graph = (props: Props) => {
  let series: Highcharts.SeriesOptionsType[] = [];
  let categories: any = [];
  props.allData.map((aData) => {
    let data: any = [];
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
  const options: Highcharts.Options = {
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
