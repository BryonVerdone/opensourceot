import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css';
const SingleActivity = ({ id, attributes }) => {
  return (
    <>
      <article>
        <Card className='activity-card' style={{}}>
          <Card.Img
            className='activity-img'
            variant='top'
            src={`http://localhost:1337` + attributes.image.data.attributes.url}
          />
          <Card.Body>
            <Card.Title>
              {' '}
              <h3>{attributes.title}</h3>
            </Card.Title>
            <Card.Text className='card-text'>
              {' '}
              <p>{attributes.desc}</p>
            </Card.Text>
            <Button variant='primary'>More Info</Button>
          </Card.Body>
        </Card>
      </article>
    </>
  );
};

export default SingleActivity;
