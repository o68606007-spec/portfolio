import { memo, useEffect, useState, useCallback } from "react";
import { supabase } from '../utils/supabase'
import axios from "axios";

import { Title } from './Title'
import { Profile } from './Profile'
import { Projects } from './Projects'
import { Articles } from './Articles'
import { Experience } from './Experience'
import { ProfileDetail } from './ProfileDetail'
import { GetPortfolioData } from "../lib/GetPortfolioData"
import { GetPickupArticles } from "../lib/GetPickupArticles"

export const Home = memo(() => {
    const [data, setData] = useState(null);
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const data = await GetPortfolioData();
            setData(data);
        }
        const getArticles = async () => {
            const data = await GetPickupArticles();
            setArticles(data);
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

})