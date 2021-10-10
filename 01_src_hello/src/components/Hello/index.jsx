import react from "react";
import hello from "./index.module.css";

export default class Hello extends react.Component {
  render() {
    return <h2 className={hello.title}>Hello Now I'm here</h2>;
  }
}
