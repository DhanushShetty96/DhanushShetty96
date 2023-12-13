import React, { useEffect, useState } from "react";

function UseEffectHook1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `clicked ${count}`;
    console.log("in useEffect");
  }, [count]);
  return (
    <div>
      UseEffectHook1
      <button onClick={() => setCount(count + 1)}>click count: {count}</button>
    </div>
  );
}

export default UseEffectHook1;
