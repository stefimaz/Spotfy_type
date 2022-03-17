import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Layout } from 'antd';
import Spotify from "./images/Spotify.png";
import { SearchOutlined, DownCircleOutlined } from '@ant-design/icons';

const { Footer, Sider, Content } = Layout;

const App = () => {
  return (

    <Layout>
      <Sider width={300} className="sideBar">
        <img src={Spotify} alt="Logo" className="logo"></img>
        <div className='searchBar'>
          <spam> Search </spam>
          <SearchOutlined style={{ frontsize: "30px" }} />
        </div>
        <Link to="/">
          <p style={{ coloor: "#1DB954" }}> Home </p>
        </Link>
        <p> Your Music </p>
        <div className='recentPlayed'>
          <p className='recentTitle'> RECENTLY PLAYED </p>
          <div className='install'>
            <spam> Install App</spam>
            <DownCircleOutlined style={{ fontSize: "30px" }} />
          </div>
        </div>
      </Sider>
      <Content className='ContentWindow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<Album />} />
        </Routes>
      </Content>
    </Layout>

  )
};

export default App;
