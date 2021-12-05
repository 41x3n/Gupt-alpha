import { BeatLoader } from "react-spinners";

import loaderStyles from "../loader/Loader.module.css";

const Loader = () => {
  return (
    <div className={loaderStyles.container}>
      <h5>
        Fetch from magic land of 0s and 1s
        <BeatLoader color="#000" size={7} />
      </h5>
    </div>
  );
};

export default Loader;
