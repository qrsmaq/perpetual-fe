import React from "react";

import tasks from "../Content/mock-content";

const Tasks = () => {
  let todaysDate = new Date();
  let dateOptions = {
    weekday: "long",
  };

  return (
    <div className="card-body">
      <div className="task-list-wrapper">
        <ul className="task-list">
          <h5>{todaysDate.toLocaleDateString("en-US", dateOptions)}</h5>
          {tasks.tasksToday.map((today) => {
            return (
              <li key={today.id}>
                <p>{today.title}</p>
              </li>
            );
          })}

          <h5>Tomorrow</h5>
          {tasks.tasksTomorrow &&
            tasks.tasksTomorrow.map((tomorrow) => {
              return (
                <li key={tomorrow.id}>
                  <p>{tomorrow.title}</p>
                </li>
              );
            })}

          <h5>Upcoming</h5>
          {tasks.tasksUpcoming &&
            tasks.tasksUpcoming.map((upcoming) => {
              return (
                <li key={upcoming.id}>
                  <p>{upcoming.title}</p>
                </li>
              );
            })}

          <h5>Eventually</h5>
          {tasks.tasksEventually &&
            tasks.tasksEventually.map((eventually) => {
              return (
                <li key={eventually.id}>
                  <p>{eventually.title}</p>
                </li>
              );
            })}
        </ul>
      </div>

      <div className="mt-4 text-center small">
        {tasks.room &&
          tasks.rooms.map((room) => {
            return (
              <span className="mr-2" key={room.id}>
                {room.title}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default Tasks;
