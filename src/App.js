import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about-us/About';
import Activities from './pages/activities/Activities';
import Layout from './layout/Layout';
// import data from './data';
import { useEffect, useState } from 'react';

const url = 'http://localhost:1337/api/activities?populate=*';
function App() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchActivities = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const activities = await res.json();
      setActivities(activities.data);
      setLoading();
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
          <Route
            path='activities'
            element={<Activities loading={loading} activities={activities} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
