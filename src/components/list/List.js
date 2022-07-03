import React from 'react';

const List = ({ activities }) => {
  return (
    <>
      {activities.map((activity) => {
        const { id, title, category, desc } = activity;
        return (
          <article key={id}>
            <h2>{title}</h2>
            <h3>{category}</h3>
            <p>{desc}</p>
          </article>
        );
      })}
    </>
  );
};

export default List;
