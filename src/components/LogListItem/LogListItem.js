import React from "react";
import "./LogListItem.css";

function LogListItem(props) {
  const log = props.log;

  return (
    <section className="LogListItem">
      <h3>{log.date}</h3>
      <p>
        {log.start} - {log.end}
      </p>
      <dl>
        <dt>Screen time hours:</dt>
        <dd>{log.hours}</dd>
        <dt>Media type:</dt>
        <dd>{log.media_type}</dd>
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
