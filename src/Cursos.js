import React from "react";

const Courses = () => {
  const cursos = [
    {
      id: 1,
      name: "Half Stack aplication development",
      parts: [
        {
          id: 1,
          name: "Fundamentals of React",
          exercises: 10
        },
        {
          id: 2,
          name: "Using props to pass data",
          exercises: 7
        },
        {
          id: 3,
          name: "State of component",
          exercises: 14
        },
        {
          id: 4,
          name: "Redux",
          exercises: 11
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          id: 1,
          name: "Routing",
          exercises: 10
        },
        {
          id: 2,
          name: "Middlewares",
          exercises: 7
        }
      ]
    }
  ];

  return <ul>{cursos.map((curso) => console.log(curso))}</ul>;
};

export default Courses;
