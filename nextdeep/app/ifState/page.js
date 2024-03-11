const State = () => {
  let score = 70;
  let grade = "";
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }
  return (
    <div className="m-5 text-center ">
      {score >= 60 && <h2>you are passed and grade is: {grade}</h2>}

      {score < 60 && <h2>you are failed and grade is: {grade}</h2>}
    </div>
  );
};

export default State;
