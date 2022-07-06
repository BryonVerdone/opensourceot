import React, { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import './index.css';
const SingleActivity = () => {
  const { activityId } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetchActivity = async () => {
    const url = `http://localhost:1337/api/activities/${activityId}?populate=*`;
    setLoading(true);
    try {
      const res = await fetch(url);
      const activity = await res.json();
      setActivity(activity.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchActivity();
  }, []);

  if (loading) {
    return (
      <>
        <h1>loading</h1>
      </>
    );
  }

  console.log(activity);
  const { title, image } = activity.attributes;
  const { url } = image.data.attributes;
  console.log(image);
  console.log(url);

  return (
    <article key={activity.id}>
      <h1>{title}</h1>
      <img src={`http://localhost:1337` + url} alt='' />
      <Link to='/activities'>
        <button>Back to Activities</button>
      </Link>
    </article>
  );
};

export default SingleActivity;
