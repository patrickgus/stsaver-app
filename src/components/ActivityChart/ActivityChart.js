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
    date: format(new Date(log.start_time), "iii M/dd"),
    hours: log.hours
  }));

  const dates = props.logs.map(log =>
    format(new Date(log.start_time), "iii M/dd")
  );

  return (
    <div className="ActivityChart">
      <VictoryChart domainPadding={10} theme={VictoryTheme.material}>
        <VictoryAxis tickValues={dates} />
        <VictoryAxis dependentAxis tickFormat={[0, 2, 4, 6, 8, 10]} />
        <VictoryLabel text="Hours" x={0} y={12} textAnchor="start" />
        <VictoryBar data={data} x={"date"} y={"hours"} />
      </VictoryChart>
    </div>
  );
}

export default ActivityChart;
