import { useState, useEffect } from 'react'
import axios from "axios"
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

const baseURL = "http://localhost:3000/service/";

function App() {
  const [srv, getAll] = useState(null); //null


  useEffect(() => {
    axios.get(baseURL).then((response)=>{
      const allServices = response.data
      //setGetAll(response.data); 
      getAll(allServices)    
    });
    
  }, []);     // console.log()
/* function App() {
  //const [data, setData] = useState()

  function makeService() {
    let serviceObject = {
      category: "Plumbing",
      title: "Paslaugos",
      name: "Julius A.",
      address: "Poeto g. 100, Vilnius",
    }
    createService(serviceObject) //axios.post("http://localhost:3000/service", serviceObject)
  }
  

  useEffect(() => {
    async function gettingData() {
      const response = await axios.get("http://localhost:3000/service")
      if  (response.status === 200) {
      setData(response.data)  // console.log(response)
      }
    }
    gettingData()
  }, [])  */
if(!srv) return null;

  return (
    <>
      <div>
        <h1>Create data app</h1>
        <table>
          <thead>
            <tr>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            {srv.map((item)=>(
            <tr key={item.title}>
              <th>{item.category}</th>
              <td>{item.title}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
      <button>
        CREATE OBJECT
      </button>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


    </>
  )
};   // {JSON.stringify(data)}

export default App
