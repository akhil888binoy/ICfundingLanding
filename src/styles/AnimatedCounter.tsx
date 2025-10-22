import React, { useEffect, useState } from "react";

const AnimatedCounter = () => {
  const [count, setCount] = useState(0);
  const target = 200000; // 200K
  const duration = 2000; // in ms

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 2000; // increment faster (change this for smoother/slower effect)
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <span className="italic bg-gradient-to-tr from-[#C23FF4] to-[#733FB7] bg-clip-text text-transparent">
      ${count.toLocaleString()}
    </span>
  );
};

export default AnimatedCounter;
