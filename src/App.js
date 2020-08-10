/*
 *   App
 *
 *   Creates the UI through AppView
 *   When mounted: loads playlist through PlaylistLoader
 *   Uses state for videos (playlist) and curVid: when a vid is selected
 *
 */

import React, { useState, useEffect } from "react";

import "./App.css";
import PlaylistLoader from "./util/PlaylistLoader";
import AppView from "./view/AppView";

export default function App() {
  const [videos, setVideos] = useState();

  //When mounted, load playlists -> then add to state: setVideos
  useEffect(() => {
    PlaylistLoader((playlist) => setVideos(playlist));
  }, []);

  return <AppView videos={videos} />;
}
