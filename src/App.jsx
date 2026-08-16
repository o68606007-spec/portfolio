import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from "axios";
import { supabase } from './utils/supabase'

import { Title } from './components/Title'
import { Profile } from './components/Profile'
import { Projects } from './components/Projects'
import { Articles } from './components/Articles'
import { Experience } from './components/Experience'

function App() {
  const [data, setData] = useState(null);
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data, error } = await supabase.from('portfolio').select('*');
        if (error) {
          throw new Error(error.message);
        }
        setData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }
    const getArticles = async () => {
      try {
        const { data, error } = await supabase.from('pickup_articles').select('*');
        if (error) {
          throw new Error(error.message);
        }
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles data:', error);
      }
    };

    getData();
    getArticles();
    setLoading(false);
  }, []);


  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <Title />
        <Profile /><br />
        <Projects data={data} /><br />
        <Articles articles={articles} /><br />
        <Experience />
      </div>
    </>
  )
}

export default App
