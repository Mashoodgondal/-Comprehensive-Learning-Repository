const MapFunc = () => {
  let arr = [
    { Name: "Ali", RollNo: "32", Section: "A" },
    { Name: "Asger", RollNo: "33", Section: "C" },
    { Name: "Fezan", RollNo: "34", Section: "M" },
  ];
  return (
    <div>
      {arr.map((item) => {
        return (
          <>
            <h1 className="text-center"> Hellow - {item.Name}</h1>
            <h1 className="text-center"> Hellow - {item.RollNo}</h1>
            <h1 className="text-center"> Hellow - {item.Section}</h1>
            <hr />
          </>
        );
      })}
    </div>
  );
};

export default MapFunc;
