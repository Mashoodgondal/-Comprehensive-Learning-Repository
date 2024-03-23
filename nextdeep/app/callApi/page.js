import axios from "axios";

const loadData = async () => {
  let response = await axios.get("https://api.github.com/users/naveed-rana");
  console.log(response);
};

const ApiCalling = () => {
  return (
    <div>
      <h1 className="mt-10 text-4xl text-center font-bold text-indigo-600">
        Call Rest API
      </h1>
      <button
        className="bg-gray-300 rounded hover:bg-gray-500 ml-[600px] mt-20 p-2"
        onClick={loadData}
      >
        Load Data
      </button>
    </div>
  );
};

export default ApiCalling;
