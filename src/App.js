import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about-us/About';
import Activities from './components/activities/Activities';
import Layout from './layout/Layout';
// import data from './data';
import { useEffect, useState } from 'react';

const url = 'http://localhost:1337/api/activities?populate=*';
function App() {
  // [] display data from api
  // const [activities, setActivities] = useState(data);
  const [activities, setActivities] = useState([]);

  // console.log(activities);
  const fetchActivities = async () => {
    try {
      const res = await fetch(url);
      const activities = await res.json();
      setActivities(activities.data);
      // console.log(activities.data);
    } catch (error) {
      console.log(error);
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
            element={<Activities activities={activities} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
