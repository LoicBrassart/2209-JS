import axios from "axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

function App() {
  const [videos, setVideos] = useState([]);

  const [formFields, setFormFields] = useState({
    source: "",
    website: "",
    tags: "",
    title: "",
  });

  useEffect(() => {
    axios.get("http://localhost:5000/videos").then(({ data }) => {
      setVideos(data);
    });
  }, []);

  const hChange = (evt) => {
    setFormFields({ ...formFields, [evt.target.name]: evt.target.value });
  };
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios.post("http://localhost:5000/videos", formFields);
  };

  return (
    <div className="App">
      <h1>Project fullstack !</h1>
      <form onSubmit={hSubmit}>
        <label>
          Source:
          <input
            type="text"
            value={formFields.source}
            name="source"
            onChange={hChange}
          />
        </label>
        <label>
          Website:
          <input
            type="text"
            value={formFields.website}
            name="website"
            onChange={hChange}
          />
        </label>
        <label>
          Tags:
          <input
            type="text"
            value={formFields.tags}
            name="tags"
            onChange={hChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            value={formFields.title}
            name="title"
            onChange={hChange}
          />
        </label>
        <input type="submit" value="Enregistrer" />
      </form>
      <ul>
        {videos.map((video) => {
          return (
            <li>
              <YouTube videoId={video.source} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
