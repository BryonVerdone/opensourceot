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
    <Container>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Activities</h1>
      <section className='activities-list'>
        {activities.map((activity) => {
          return (
            <article key={activity.id}>
              <Card style={{ width: '18rem' }} className='activity-card'>
                <Card.Img
                  style={{
                    width: '100%',
                    height: '125px',
                    borderRadius: '10px',
                  }}
                  variant='top'
                  src={
                    `http://localhost:1337` +
                    activity.attributes.image.data.attributes.url
                  }
                />
                <Card.Body>
                  <Card.Title style={{ marginBottom: '10px' }}>
                    <h3>{activity.attributes.title}</h3>
                  </Card.Title>
                  {/* <Card.Text>{activity.attributes.desc}</Card.Text> */}
                  <Link
                    activities={activities}
                    to={`/activities/${activity.id}`}
                  >
                    <button className='btn'>more info</button>
                  </Link>
                </Card.Body>
              </Card>
            </article>
          );
        })}
      </section>
    </Container>
  );
};

export default Activities;
