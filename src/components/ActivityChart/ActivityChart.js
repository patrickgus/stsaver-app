import React from "react";
import { format } from "date-fns";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";

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
      <VictoryChart>
        <VictoryAxis tickValues={dates} />
        <VictoryAxis dependentAxis tickFormat={[0, 2, 4, 6, 8, 10]} />
        <VictoryLine data={data} x={"date"} y={"hours"} />
      </VictoryChart>
    </div>
  );
}

export default ActivityChart;
