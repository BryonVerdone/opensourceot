import React from 'react';
import './index.css';
import SingleActivity from '../../components/single-activity/SingleActivity';
const Activities = ({ activities }) => {
  return (
    <>
      <h1>Activities</h1>
      <section className='activities-list'>
        {activities.map((activity) => {
          return <SingleActivity key={activity.id} {...activity} />;
        })}
      </section>
    </>
  );
};

export default Activities;
