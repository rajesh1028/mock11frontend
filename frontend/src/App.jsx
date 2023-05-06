import './App.css';
// import React, { useState, useEffect } from "react";
import React from "react";

import PostNotice from './components/postNotice';
import ViewNotice from './components/viewNotice';

// import { Link, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <PostNotice />
      <ViewNotice />
    </div>
  );
}

export default App;
