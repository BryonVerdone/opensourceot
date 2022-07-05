import React from 'react';

const SingleActivity = ({ id, attributes }) => {
  return (
    <div>
      <h2> Activity: {id}</h2>
      <h1>{attributes.title}</h1>
      <img
        src={`http://localhost:1337` + attributes.image.data.attributes.url}
        alt=''
      />
      <p>{attributes.desc}</p>
    </div>
  );
};

export default SingleActivity;
