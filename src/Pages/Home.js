import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ExpCard from '../Components/Card/ExpCard';
import HomeCard from '../Components/Card/HomeCard';
import SearchForm from '../Components/Form/SearchForm';
import './Shared/Home.css';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allExp, setAllExp] = useState([]);

  useEffect(() => {
    fetch('expdata.json')
      .then(res => res.json())
      .then(data => {
        setAllExp(data);
      })
  }, [])

  return (
    <>
      <div className='px-6 md:px-10 lg:px-20 md:flex justify-center gap-5'>
        <div>
          <SearchForm />
        </div>

        <div className='flex-1'>
          <div className='pt-7'>
            <div className='flex justify-between mb-5 font-medium'>
              <h2>Homes</h2>
              <Link to='/coming-soon'>
                <h2>See All</h2>
              </Link>
            </div>
            <div className='custom-grid'>
              {
                [...Array(6)].map((exp, i) => <HomeCard
                  key={i}
                  exp={exp}
                />)
              }
            </div>
          </div>
          <div className='pt-[100px] mb-[50px]'>
            <div className='flex justify-between mb-5 font-medium'>
              <h2>Experiences</h2>
              <Link to='/coming-soon'>
                <h2>See All</h2>
              </Link> 
            </div>
            <div className='custom-grid'>
              {
                allExp.slice(0, 4).map((exp, i) => <ExpCard
                  key={i}
                  exp={exp}
                />)
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
