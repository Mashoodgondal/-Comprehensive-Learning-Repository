"use client";
const MapFunc = () => {
  let arr = [
    { Name: "Ali", RollNo: "32", Section: "A" },
    { Name: "Asger", RollNo: "33", Section: "C" },
    { Name: "Fezan", RollNo: "34", Section: "M" },
  ];
  const deleteHandler = () => {
    arr.shift();
    console.log(arr);
  };
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
      <table>
        <tr>
          <th>StudentName</th>
          <th>RollNo</th>
          <th>Section</th>
        </tr>
        {arr.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.Name}</td>
              <td>{item.RollNo}</td>
              <td>{item.Section}</td>
              <td>
                <button
                  className="bg-gray-300 rounded-md hover:bg-gray-400"
                  onClick={deleteHandler}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default MapFunc;
