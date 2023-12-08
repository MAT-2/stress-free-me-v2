const ThoughtList = ({ thoughts = [] }) => {
  if (!thoughts.length) {
    return <h1>There Are No Thoughts Existing</h1>;
  }

  return (
    <>
      <h2>Thought List</h2>
      <div>
        {thoughts &&
          thoughts.map((thought) => (
            <div key={thought._id}>
              <div>
                <h5>Created on {thought.createdAt}</h5>
                <h5>{thought.thoughtText}</h5>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ThoughtList;
