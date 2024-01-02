import React from 'react'
import { BsFillBellFill, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from 'react-icons/bs'
import { LineChart, Line, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const Home = () => {

  const data = [
    {
      name: 'Jan',
      TotalProfit: 30000,
      TotalLoss: 20000,


    },
    {
      name: 'Feb',
      TotalProfit: 15000,
      TotalLoss: 5000,


    },
    {
      name: 'March',
      TotalProfit: 50000,
      TotalLoss: 30000,

    },
    {
      name: 'April',
      TotalProfit: 40000,
      TotalLoss: 25000,

    },
    {
      name: 'May',
      TotalProfit: 10000,
      TotalLoss: 5000,

    },
    {
      name: 'June',
      TotalProfit: 90000,
      TotalLoss: 15000,

    },
    {
      name: 'July',
      TotalProfit: 20000,
      TotalLoss: 5000,

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
            <Bar dataKey="TotalProfit" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="TotalLoss" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
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
            <Line type="monotone" dataKey="TotalProfit" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="TotalLoss" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>


      </div>
    </main>
  )
}
