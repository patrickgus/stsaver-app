import React from "react";
import { format } from "date-fns";
import {
  VictoryChart,
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel
} from "victory";

function ActivityChart(props) {
  const data = props.logs.map(log => ({
    date: format(new Date(log.start_time), "iiiiii M/d"),
    hours: log.hours
  }));

  const dates = props.logs.map(log =>
    format(new Date(log.start_time), "iiiiii M/d")
  );

  return (
    <div className="ActivityChart">
      <VictoryChart
        domainPadding={20}
        width={500}
        theme={VictoryTheme.material}
      >
        <VictoryAxis
          tickValues={dates}
          style={{ tickLabels: { fontSize: 15 } }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={[0, 2, 4, 6, 8, 10]}
          style={{ tickLabels: { fontSize: 15 } }}
        />
        <VictoryLabel
          text="Hours"
          dy={30}
          dx={15}
          textAnchor="start"
          style={{ fontSize: 15 }}
        />
        <VictoryBar data={data} x={"date"} y={"hours"} />
      </VictoryChart>
    </div>
  );
}

export default ActivityChart;
