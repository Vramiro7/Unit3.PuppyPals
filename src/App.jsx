import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'



 const App = () => {
  const [puppies, setPuppies] = useState(puppyList);
  const [currentPupId, setCurrentPupId] = useState(null)
  const currentPup = puppies.find((pup) => pup.id === currentPupId)
  console.log(currentPup)
  return (
    <>
     {
      puppies.map((puppy) => {
        return <p onClick={() => {setCurrentPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
      })
     }
      <div>{currentPupId && (
        <div>
          <h2>{currentPup.name}</h2>
          <ul>
            <li>Age: {currentPup.age}</li>
            <li>Email: {currentPup.email}</li>
          </ul>
        </div>  
      )}
      </div>
    </>
  )
}

export default App
