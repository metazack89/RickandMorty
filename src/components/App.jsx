import { useEffect, useState } from "react"
import useFetchApi from "../hooks/useFetchApi";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import LocationCard from "./LocationCard";
import ResidentsList from "./ResidentsList";
import SearchForm from "./SearchForm";
import Hero from "./Hero";



function App() {48
  const {data, pending, error, request} = useFetchApi()
  const randomId = Math.floor(Math.random() * 126) + 1;
  const [search, setSearch] = useState(randomId)
  const urlLocations = `https://rickandmortyapi.com/api/location/${search}`;

  useEffect(() => {
    request(`${urlLocations} `)
  }, [search])

  //console.log(data)
  return (
    <>
    <Hero/>
    {pending ? (<Skeleton count={1} height={30} />) : (<LocationCard location={data} />)}
    <SearchForm setSearch={setSearch}/>
    {console.log(search)}
    {data ? (<ResidentsList residents={data?.residents} />) : (<p>No hay Residentes</p>)}
    
    </>
  )
}

export default App
