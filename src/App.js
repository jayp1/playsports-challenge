import './App.css';
import top_header from './images/top_header.png';
import footer from './images/footer.png';
import { useState } from 'react';
import videos from './videos.json';

const App = () => {

  const [open, setDrawer] = useState(false);
  const videoArray = videos.map(item => {
    return {
      src: `https://img.youtube.com/vi/${item._id}/mqdefault.jpg`,
      date: item.publishDate,
      title: item.title
    }
  });

  const toggleNav = (event) => {

    if (open) {
      setDrawer(false);
      document.getElementById('mySidenav').style.width = "0";
      //document.getElementById('mySidenav').style.height = "0";
     

    } else {
      setDrawer(true);
      document.getElementById('mySidenav').style.width = "60%";
      //document.getElementById('mySidenav').style.height = "100%";
      
    }
    document.getElementById('nav-menu').classList.toggle('change');


  }

  const menuIcon =
    (
      <>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </>
    );

  return (
    <div className="App">
      <header className="App-header">
        <img id="top-header" src={top_header} alt="Header with links" />
        <nav className="navbar">
          <div className="row-top-nav">
            <div id="nav-menu" className="menu-icon" onClick={toggleNav}>

              {menuIcon}

            </div>

            <div className="social-links">
              <ul>
                <li><a href="www.facebook.com" target="_blank"><i className="fa fa-facebook-f"></i></a></li>
                <li><a href="www.twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                <li><a href="www.instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                <li><a href="www.google.com" target="_blank"><i className="fa fa-google-plus"></i></a></li>
              </ul>
            </div>

          </div>


          <div id="mySidenav" className="sidenav">
            <a href="#">Home</a>
            <a href="#">GCN Show</a>
            <a href="#">How to</a>
            <a href="#">Training</a>
            <a href="#">Features</a>
            <a href="#">Top 10s</a>
            <a href="#">GCN Racing</a>
            <a href="#">GCN Tech</a>
            <a href="#">Presenters</a>
          </div>



        </nav>
      </header>

      <main>
        <div className="search-bar">
          <form className="search-form">
            <input className="search-input" type="text" placeholder="Search for videos"></input>
            <button type="submit" className="search-button">
              <i className="fa fa-search"></i>
            </button>

          </form>

        </div>

        <div className="title-video">
          <div className="iframe-container">
            <iframe src="https://www.youtube.com/embed/jAftgzv_aX8?html5=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.globalcyclingnetwork.com"
              frameBorder="0"
              allowFullScreen="" data-gtm-yt-inspected-1091030_29="true" id="413168673" data-gtm-yt-inspected-1091030_30="true">
            </iframe>
          </div>
        </div>
        <div className="video-list">
          <h3>Latest Videos</h3>

          {videoArray.slice(0, 5).map(item => {
            return (
                <div className="video-item">
                  <img className="video-img" src={item.src} alt="GCN video link" />
                  <h6 className="video-date">{new Date(item.date).toUTCString()}</h6>
                  <p className="video-title">{item.title}</p>

                </div>
                

              

            );
          })}

          <button className="more-button">More Videos...</button>

        </div>



      </main>

      <footer>
        <img src={footer} alt="footer" />
      </footer>
    </div>
  );
}

export default App;
