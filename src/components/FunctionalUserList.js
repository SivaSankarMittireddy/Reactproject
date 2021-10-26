import React,{useState,useEffect} from 'react'

function FunctionalUserList() {
    let[dogImage,setDogImage]=useState(null)
    useEffect(()=> {
      fetch("https://dog.ceo/api/breeds/image/random/100")
      .then(response => response.json())
      .then(data => setDogImage(data.message))
    },[])
  return (
    <div >
      <h1>Functional Component Example</h1>
      {dogImage && dogImage.map((dog) => <img width={"500px"} src={dog}></img>)}
    </div>
  )
}

export default FunctionalUserList
