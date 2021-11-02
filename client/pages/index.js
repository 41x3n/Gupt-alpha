import Nav from '../Components/Nav';
import Body from '../Components/Body';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
      </div>
      <div className="row" style={{ maxHeight: '750px' }}>
        <Body />
      </div>
      <div className="row justify-content-sm-center pb-100">
        <Footer />
      </div>
    </div>
  );
}
