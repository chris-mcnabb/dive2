import './chart.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {useState} from "react";
import useToggle from "../hooks/useToggle";
const initialValue = {id: 'WebShop', color: '#8884d8'};

const NewChart = () => {
    const [view, setView] = useState(initialValue);
    const [singleChart, setSingleChart] = useToggle()

    const handleClick = (data) => {
      if(!singleChart){
          setView({id: data.id, color: data.color})
          setSingleChart()
      }else{
          setView({id: data.id, color: data.color})
      }
    }

    const data = [
        { name: "January", WebShop: 1200, Rentals: 3000, Cursus: 2200},
        { name: "February", WebShop: 2100, Rentals: 500, Cursus: 3000},
        { name: "March", WebShop: 800, Rentals: 2400,Cursus: 300 },
        { name: "April", WebShop: 1600, Rentals: 300, Cursus: 1300},
        { name: "May", WebShop: 900, Rentals: 1200, Cursus: 500},
        { name: "June", WebShop: 1700, Rentals: 950, Cursus: 900},
    ];


    return (
        <div className='chart'>
            <div className="title">Last 6 Months(Revenue)
                <button className='button web' onClick={()=>handleClick({id: 'WebShop', color: '#8884d8'})}>WebShop</button>
                <button className='button rental' onClick={()=>handleClick({id: 'Rentals', color: '#82ca9d'})}>Rentals</button>
                <button className='button curs' onClick={()=>handleClick({id: 'Cursus', color: '#ca82ad'})}>Cursus</button>
                <button className='button reset'onClick={()=>(
                    setSingleChart(),
                        setView(initialValue)

                )}>Reset</button>
            </div>
            <ResponsiveContainer width="100%" aspect={2/1}>
                <AreaChart width={730} height={250} data={data}
                           margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                    <defs>
                        <linearGradient id={view.id}   x1="0" y1="0" x2="0" y2="1" >
                            <stop offset="5%" stopColor={view.color} stopOpacity={0.8}/>
                            <stop offset="95%" stopColor={view.color} stopOpacity={0}/>
                        </linearGradient>
                        { !singleChart && (<><linearGradient id="Rentals" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                            <linearGradient id="Cursus"   x1="0" y1="0" x2="0" y2="1" >
                                <stop offset="5%" stopColor="#ca82ad" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#ca82ad" stopOpacity={0}/>

                            </linearGradient></>)
                        }

                    </defs>
                    <XAxis dataKey="name" stroke="lightslategray"/>

                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <Tooltip />
                    <Area type="monotone" dataKey={view.id} stroke={view.color} fillOpacity={1}  fill={`url(#${view.id})`}/>
                    {!singleChart && <><Area type="monotone" dataKey="Rentals" stroke="#82ca9d" fillOpacity={1} fill="url(#Rentals)"/>
                        <Area type="monotone" dataKey="Cursus" stroke="#ca82ad" fillOpacity={1} fill="url(#Cursus)" /></>}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default NewChart;
