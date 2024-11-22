import React from "react";
import PieChart from "@/components/charts/PieChart";
import { PieCharts, PieChartTitle, PieData } from "@/lib/interfaces";
import { pieChart } from "@/actions/chartsAndGrpahs.actions";
import ProgressBar from "../progress_bar/ProgressBar";
import { GeistSans } from "geist/font/sans";

const BugetGraph = () => {
  const piechart: PieCharts = pieChart();
  const titleData: PieChartTitle = piechart.data.title;
  const legendData: string[] = piechart.data.legend.data;
  const data: PieData[] = piechart.data.data;

  return (
    <section className="w-full h-full flex flex-col items-center">
      <h1 className="text-2xl pb-4 self-start">Insights</h1>
      <div className="bg-white rounded-3xl shadow-sm flex flex-col items-center w-full h-full gap-4">
        <h1 className="text-xl  self-start pl-5">Budget</h1>
        <sub className="self-start pl-5 text-lg">Add a budget strategy to view your budget data here</sub>
        <div className="scale-150 w-96 flex-1 justify-center pt-10">
          <PieChart titleData={titleData} legendData={legendData} data={data} />
        </div>
        <div className=" w-full pl-5">
          <p className={`${GeistSans.className} py-5 text-lg font-medium`}>
            Insights
          </p>

          <div className="w-full  ">
            <div>
              <ProgressBar progress={70} />
              <p className={`${GeistSans.className} py-2`}>Spending limit</p>
            </div>
            <div>
              <ProgressBar progress={30} progressBarColor="#6A5ACD" />
              <p className={`${GeistSans.className} py-2`}>Spending limit</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BugetGraph;
