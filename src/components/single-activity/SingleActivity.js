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
  const { id } = activity.id;
  const { title, image, instructions } = activity.attributes;
  const { url } = image.data.attributes;
  console.log(image);
  console.log(url);

  return (
    <section className='single-activity-section'>
      <article key={id}>
        <h1>{title}</h1>
        <img
          className='single-activity-img'
          src={`http://localhost:1337` + url}
          alt=''
        />
        <p>{instructions}</p>
        <div>
          <Link to='/activities'>
            <button>Back to Activities</button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default SingleActivity;
