"use client";
import { useState } from "react";
// https://api.github.com/users/naveed-rana
const GitApp = () => {
  const [userName, setuserName] = useState("");
  const [data, setdata] = useState(null);
  const [followers, setfollowers] = useState([]);
  const ChangeHandler = (e) => {
    setuserName(e.target.value);
  };
  const searchHandler = async () => {
    let responce = await fetch(`https://api.github.com/users/${userName}`);
    responce = await responce.json();
    setdata(responce);
    console.log(responce);
  };
  const followerHandler = async () => {
    let responce = await fetch(data.followers_url);
    responce = await responce.json();
    console.log(responce);
    setfollowers(responce);
  };
  return (
    <div className="text-center mb-8">
      <h1 className="m-6 text-indigo-600 text-3xl text-center font-bold">
        GitApp
      </h1>
      <div className="text-center space-x-2">
        <span>Enter UserName you want to Search</span>
        <input
          type="text"
          placeholder="Enter user name"
          className="border border-gray-400  rounded-md"
          onChange={ChangeHandler}
        />
        <button
          className="p-1 bg-gray-300 hover:bg-gray-400 rounded-md"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
      {data && (
        <div className="text-center mt-8">
          <h1 className="text-indigo-500 text-2xl font-bold">Github User</h1>
          <img
            src={data.avatar_url}
            width={100}
            className="mx-auto mt-6"
            alt=""
          />
          <h1>
            user-bio:{data.bio} Folloewers:{data.followers}
          </h1>
          <button
            className="bg-gray-300 p-1 rounded-md hover:bg-gray-400 mt-6"
            onClick={followerHandler}
          >
            Get Followers
          </button>
        </div>
      )}
      <div className="w-1/2 mx-auto">
        {followers.length >= 1 && (
          <div className="overflow-x-auto">
            <table className="table-auto min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Avatar
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {followers.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={item.avatar_url}
                        width={50}
                        alt=""
                        className="rounded-full"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.login}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default GitApp;
