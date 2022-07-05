import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './index.css';
const SingleActivity = ({ id, attributes }) => {
  return (
    <>
      <article>
        <Card className='activity-card' style={{ width: '18rem' }}>
          <Card.Img
            className='activity-img'
            variant='top'
            src={`http://localhost:1337` + attributes.image.data.attributes.url}
          />
          <Card.Body>
            <Card.Title>{attributes.title}</Card.Title>
            <Card.Text>{attributes.desc}</Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </article>
    </>
  );
};

export default SingleActivity;
