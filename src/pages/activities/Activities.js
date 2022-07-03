import React from 'react';
import List from '../../components/list/List';

const Activities = ({ activities }) => {
  return (
    <div>
      <List activities={activities} />
    </div>
  );
};

export default Activities;
