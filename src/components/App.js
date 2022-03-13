import video from "../data/video.js";
import VideoWindow from "./VideoWindow"
import Likes from "./Likes"
import Comments from "./Comments"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
    <VideoWindow title={video.title} views={video.views} createdAt={video.createdAt} videoUrl={video.embedUrl} />
    <Likes likes={video.upvotes} dislikes={video.downvotes}/>
    <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
