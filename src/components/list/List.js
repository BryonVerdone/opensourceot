import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const List = ({ activities }) => {
  return (
    <>
      {activities.map((activity) => {
        const { id, title, category, desc } = activity;
        return (
          <article key={id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src='holder.js/100px180' />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  {category}
                </Card.Subtitle>
                <Card.Text>{desc}</Card.Text>
                <Button className='btn' variant='primary'>
                  Info
                </Button>
              </Card.Body>
            </Card>
          </article>
        );
      })}
    </>
  );
};

export default List;
