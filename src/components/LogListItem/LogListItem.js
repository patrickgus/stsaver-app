import React from "react";
import Moment from "react-moment";
import "./LogListItem.css";

function LogListItem(props) {
  const log = props.log;

  return (
    <section className="LogListItem">
      <h3><Moment date={log.start_time} format="MM-DD-YYYY" /></h3>
      <p>
        <Moment local date={log.start_time} format="h:mma" /> - <Moment local date={log.end_time} format="h:mma" />
      </p>
      <dl>
        <dt>Screen time hours:</dt>
        <dd>{log.hours}</dd>
        <dt>Media type:</dt>
        <dd>{log.media}</dd>
        <dt>Breaks taken:</dt>
        <dd>{log.breaks}</dd>
      </dl>
      <div className="LogListItem__buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </section>
  );
}

export default LogListItem;
