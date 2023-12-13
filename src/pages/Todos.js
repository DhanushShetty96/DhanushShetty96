import React from "react";
import { memo } from "react";

const Todos = ({ todos }) => {
  console.log("child render");
  var todos = [1, 0, 2, 0, 3];

  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
    </>
  );
};

export default memo(Todos);

// import { memo } from "react";

// const Todos = ({ todos }) => {
//   console.log("child render");
//   return (
//     <>
//       <h2>My Todos</h2>
//       {todos.map((todo, index) => {
//         return <p key={index}>{todo}</p>;
//       })}
//     </>
//   );
// };

// export default memo(Todos);
