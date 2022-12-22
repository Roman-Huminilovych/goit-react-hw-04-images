import DotLoader from "react-spinners/ClipLoader";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.Overlay}>
      <DotLoader size={250} color={"#3f51b5"} className={s.Loader} />
    </div>
  );
}
