import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Auguri() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  }, []);
  return (
    <>
      <h1>Auguri!!!</h1>
      <Confetti width={width} height={height} />
    </>
  );
}
