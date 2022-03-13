import React, { useState} from "react"
 
function Likes({likes, dislikes}){
  const [currentLikes, setLikes] = useState(likes)
  const [currentDislikes, setDislikes] = useState(dislikes)
  
  function handleClicks(e){
    if (e.target.id === "like"){
      setLikes(currentLikes + 1)
    } else if (e.target.id === "dislike"){
      setDislikes(currentDislikes + 1)
    }
  }

  return(
    <div>
      <button id="like" onClick={handleClicks}>{currentLikes}👍</button>
      <button id="dislike" onClick={handleClicks}>{currentDislikes}👎</button>
    </div>
  )
}

export default Likes