import React from "react";
import { format } from "date-fns";
import { VictoryChart, VictoryLine, VictoryAxis } from "victory";

function ActivityChart(props) {
  const data = props.logs.map(log => ({
    date:  format(new Date(log.start_time), "MM-dd-yyyy"),
    hours: log.hours
  }));

  return (
    <div className="ActivityChart">
      <VictoryChart domainPadding={10}>
        <VictoryAxis
          tickValues={["02-24-2020", "02-25-2020", "02-26-2020", "03-04-2020"]}
        />
        <VictoryAxis dependentAxis tickFormat={[0, 2, 4, 6, 8, 10]} />
        <VictoryLine data={data} x={"date"} y={"hours"} />
      </VictoryChart>
    </div>
  );
}

export default ActivityChart;
