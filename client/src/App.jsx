import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Event from './components/Event'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/events/1',
      element: <LocationEvents index={1} />
    },
    {
      path: '/events/2',
      element: <LocationEvents index={2} />
    },
    {
      path: '/events/3',
      element: <LocationEvents index={3} />
    },
    {
      path: '/events/4',
      element: <LocationEvents index={4} />
    },
    {
      path: '/events/all',
      element: <Event />
    }
  ])

  return (
    <div className='app'>

      <header className='main-header'>
        <h1>UnityGrid Plaza</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events/all' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App