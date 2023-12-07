const styles = {
  card: {
    width: "50rem",
    padding: 20,
  },
};

function Results() {
  return (
    <>
      <div className="m-5 d-flex justify-content-center">
        <div className="card " style={styles.card}>
          <div className="card-body">
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
