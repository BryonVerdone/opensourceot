import React from 'react';
import './index.css';
import SingleActivity from '../../components/single-activity/SingleActivity';
import Loading from '../../components/loading/Loading';
const Activities = ({ activities, loading }) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Activities</h1>
      <section className='activities-list'>
        {activities.map((activity) => {
          return <SingleActivity key={activity.id} {...activity} />;
        })}
      </section>
    </>
  );
};

export default Activities;
