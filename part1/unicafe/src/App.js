const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  // const total = course.parts.reduce(function(acc, cur) {
  //   return acc + cur.exercises;
  //  }, 0);

  const Header = (props) => {
    return (
      <>
        <h1>{props.course.name}</h1>
      </>
    );
  };

  const Content = (props) => {
    return (
      <>
        {props.course.parts.map((item) => {
          return (
            <p key={Math.random()}>
              {" "}
              {item.name} {item.exercises}
            </p>
          );
        })}
      </>
    );
  };
  const Total = (props) => {
    return (
      <>
        <p>
          Number of exercises{" "}
          {props.course.parts.reduce(function (acc, cur) {
            return acc + cur.exercises;
          }, 0)}
        </p>
      </>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
