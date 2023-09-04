import "./Loading.scss";
import load from "../../assets/Images/loading.png";
// import { Link } from "react-router-dom";

function Loading() {
  return (
    <div>
      <div className="wrapper">
        <img src={load} alt="Background" className="background-image" />
        <span className="circle circle-1"></span>
        <span className="circle circle-2"></span>
        <span className="circle circle-3"></span>
        <span className="circle circle-4"></span>
        <span className="circle circle-5"></span>
      </div>
    </div>
  );
}

export default Loading;
