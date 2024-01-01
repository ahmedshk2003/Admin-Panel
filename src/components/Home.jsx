import React from 'react'
import { BsFillBellFill, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'
import { LineChart, Line, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Home = () => {

  const data = [
    {
      name: 'Jan',
      uv: 100,
      pv: 400,

    },
    {
      name: 'Feb',
      uv: 300,
      pv: 198,
      amt: 200,
    },
    {
      name: 'March',
      uv: 200,
      pv: 900,
      amt: 300,
    },
    {
      name: 'April',
      uv: 280,
      pv: 908,
      amt: 400,
    },
    {
      name: 'May',
      uv: 190,
      pv: 800,
      amt: 500,
    },
    {
      name: 'June',
      uv: 390,
      pv: 300,
      amt: 600,
    },
    {
      name: 'July',
      uv: 490,
      pv: 300,
      amt: 700,
    },
  ];


  

  return (
    <main className='mainContainer'>
      <div className='mainTitle'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='mainCards'>
        <div className='card'>
          <div className='cardInner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='cardIcon' />


          </div>
          <h1>300</h1>

        </div>

        <div className='card'>
          <div className='cardInner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='cardIcon' />


          </div>
          <h1>12</h1>

        </div>

        <div className='card'>
          <div className='cardInner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='cardIcon' />


          </div>
          <h1>33</h1>

        </div>

        <div className='card'>
          <div className='cardInner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='cardIcon' />


          </div>
          <h1>42</h1>

        </div>



      </div>
      <div className='charts'>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>


      </div>
    </main>
  )
}
