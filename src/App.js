import React from 'react';
import Row from './Row';
import './App.css';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchoriginals} isLargeRow/>
      <Row title="Trending Now" fetchUrl={requests.fetchtrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchtoprated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchtrending}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchoriginals}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchtrending}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchtoprated}/>

    </div>
  );
}

export default App;
