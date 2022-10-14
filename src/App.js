import logo from "./logo.svg";
import Navbar from "./components/navbar";
import VideoPlayer from "./components/videoPlayer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Rythmoband from "./components/rythmoband/rythmoband";
import SrtUploader from "./components/srtuploader/srtuploader";
import Projectlist from "./components/projectuploader";
import "./App.css";
import { useState, createContext } from "react";

export const DialoguesContext = createContext();

function App() {
  const [Dialogues, setDialogues] = useState("ok");
  const [Time, setTime] = useState(" ");
  const [source, setsource] = useState(" ");
  const [currentTime, setCurrentTime] = useState("");
  const [dialogueNumber, setDialogueNumber] = useState(undefined);
  const [rythmoPosition, setrythmoPosition] = useState(undefined);
  const [projectName, setprojectName] = useState(undefined);
  return (
    <DialoguesContext.Provider
      value={{
        Dialogues,
        setDialogues,
        Time,
        setTime,
        source,
        setsource,
        currentTime,
        setCurrentTime,
        dialogueNumber,
        setDialogueNumber,
        rythmoPosition,
        setrythmoPosition,
        projectName,
        setprojectName,
      }}
    >
      <Router>
        <div className="App">
          <Navbar projectName={projectName} />
          <Routes>
            <Route exact path="/" element={<SrtUploader />}></Route>
            <Route
              exact
              path="/project"
              element={
                <VideoPlayer
                  Dialogues={Dialogues}
                  time={Time}
                  source={source}
                  initialTime={currentTime || '0:0:0:0'}
                  rythmoPosition={rythmoPosition}
                  dialogueNumber={dialogueNumber}
                />
              }
            ></Route>
            <Route exact path="/projectlist" element={<Projectlist />}></Route>
          </Routes>
        </div>
      </Router>
    </DialoguesContext.Provider>
  );
}

export default App;
