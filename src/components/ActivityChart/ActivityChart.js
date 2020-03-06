import React from "react";
import { format } from "date-fns";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLabel } from "victory";

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
      <VictoryChart domainPadding={5}>
        <VictoryAxis tickValues={dates} />
        <VictoryAxis dependentAxis tickFormat={[0, 2, 4, 6, 8, 10]} />
        <VictoryLabel text="Hours" x={0} y={12} textAnchor="start" />
        <VictoryLine data={data} x={"date"} y={"hours"} />
      </VictoryChart>
    </div>
  );
}

export default ActivityChart;
