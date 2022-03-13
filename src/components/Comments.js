import React, { useState }from "react";

function Comments({comments}){
  const[hideShow, setHideShow] = useState("Hide Comments")
  
  const commentListItems = comments.map(comment=>{
    return (
      <div key={comment.id}>
        <h3>{comment.user}</h3>
        <h4>
          {comment.comment}
        </h4>

      </div>
    )
  })
  const[commentList, setCommentListOnOff] = useState(commentListItems)

  function handleClick(e){
    if(e.target.id==="Hide Comments"){
      setHideShow("Show Comments");
      setCommentListOnOff("")
    } else if (e.target.id==="Show Comments"){
      setHideShow("Hide Comments");
      setCommentListOnOff(commentListItems)
    }
  }

  return(
    <div>
      <button id={hideShow} onClick ={handleClick}>{hideShow}</button>
      {commentList}
    </div>
  )
}

export default Comments