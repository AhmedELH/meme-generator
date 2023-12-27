import React from "react"
import memesData from "../memesData.js"

export default function Meme(){

  const [memeImage, setMemeImage] = React.useState("")

  function getMemeImage(){
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNum].url)
    console.log(memeImage)
    
  }
return(
  <main>
   <div className="form">
    <input type="text" placeholder="Top text" className="form--input" />
    <input type="text" placeholder="Bottom text" className="form--input" />
    <button onClick={getMemeImage} className="form--button">Get A New Meme!</button>
   </div>
   <img src={memeImage} className="meme--image"></img>
  </main>
)
}