import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Loading from '../../components/loading/Loading';
import Card from 'react-bootstrap/Card';
const Activities = ({ activities, loading }) => {
  if (loading) {
    return <Loading />;
  }
  return (
    <section className='activities-list'>
      {/* {console.log(activities.attributes)} */}

      {activities.map((activity) => {
        // console.log(activity.attributes);
        return (
          <article key={activity.id}>
            <Card className='activity-card' style={{ width: '18rem' }}>
              <Card.Img
                variant='top'
                src={
                  `http://localhost:1337` +
                  activity.attributes.image.data.attributes.url
                }
              />
              <Card.Body>
                <Card.Title>
                  {' '}
                  <h3>{activity.attributes.title}</h3>
                </Card.Title>
                <Card.Text>
                  <span>{activity.attributes.desc}</span>
                </Card.Text>
                <Link activities={activities} to={`/activities/${activity.id}`}>
                  <button className='btn'>more info</button>{' '}
                </Link>
              </Card.Body>
            </Card>
          </article>
        );
      })}
    </section>
  );
};

export default Activities;
