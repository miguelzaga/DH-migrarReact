import './../assets/css/app.css'
import SideBar from './SideBar'
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer'

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <ContentRowTop />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
