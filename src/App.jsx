import { Entry } from "./components/Entry"
import { Header } from "./components/Header"
import "./index.css"

import {data} from "./data/data"



function App() {

  return (
    <>
      <Header />
      {data.map((d) => (
        <Entry key={d.id} imgSrc={d.img.src} imgAlt={d.img.alt} country={d.country} googleMaps={d.googleMapsLink} title={d.title} dates={d.dates}  text={d.text}/>
      ))}
    </>
  )
}

export default App
