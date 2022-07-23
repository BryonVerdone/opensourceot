import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about-us/About';
import Activities from './pages/activities/Activities';
import Layout from './layout/Layout';
import SharedActivityLayout from './pages/shared-activity-layout/SharedActivityLayout';
import { useEffect, useState } from 'react';
import SingleActivity from './components/single-activity/SingleActivity';

const url = 'https://activities-data.herokuapp.com/api/activities?populate=*';
function App() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchActivities = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const activities = await res.json();
      setActivities(activities.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchActivities();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='activities' element={<SharedActivityLayout />}>
            <Route
              index
              element={<Activities loading={loading} activities={activities} />}
            />
            {/* this is what I had passed in to SingleActivity activities, id, attributes */}
            <Route
              path=':activityId'
              element={
                <SingleActivity loading={loading} activities={activities} />
              }
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
