import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about-us/About';
import Activities from './pages/activities/Activities';
import Layout from './layout/Layout';
import data from './data';
import { useState } from 'react';
console.log(data);
const url = 'http://localhost:1337/api/activities?populate=*';
function App() {
  // pass data to list component
  // problem with data
  const [activities, setActivities] = useState(data);
  console.log(activities);
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  fetchData();
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
