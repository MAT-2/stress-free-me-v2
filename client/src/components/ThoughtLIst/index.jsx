const ThoughtList = ({ thoughts = [] }) => {
  if (!thoughts.length) {
    return <h1>You don't have any thoughts just yet...</h1>;
  }

  return (
    <>
      <h2>Thought Journal</h2>
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
