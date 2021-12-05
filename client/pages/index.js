import Nav from "../Components/nav/Nav";
import Body from "../Components/body/Body";
import Footer from "../Components/footer/Footer";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Nav />
      </div>
      <div className="row">
        <Body />
      </div>
      <div className="row justify-content-sm-center">
        <Footer />
      </div>
    </div>
  );
}
