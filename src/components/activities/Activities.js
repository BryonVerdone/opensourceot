import React from 'react';
// import List from '../../components/list/List';
import SingleActivity from '../single-activity/SingleActivity';
const Activities = ({ activities }) => {
  return (
    <div>
      <h1>Activities</h1>
      {/* <List activities={activities} /> */}
      <article>
        {activities.map((activity) => {
          return <SingleActivity key={activity.id} {...activity} />;
        })}
      </article>
    </div>
  );
};

export default Activities;
