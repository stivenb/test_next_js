
"use client"
import { useEffect, useState } from 'react';
import Card from   './ui/card'

export default function Home() {
  const [data, setData] = useState([]);
  const callAPI = async () => {
    try {
      const res = await fetch('http://demo8881327.mockable.io/promarketing');
      const jsonData = await res.json();
      setData(jsonData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAPI();
  }, []);
  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 min-h-screen items-center p-24"> 
      {data.map((item, index)=>(
        <Card key={index} info={item}/>
      ))}
    </main>
  )
}
