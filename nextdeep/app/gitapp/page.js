"use client";
// import Link from "next/link";
import { useState } from "react";
// import GitRepo from "../repoes/page";

// https://api.github.com/users/naveed-rana
const GitApp = () => {
  const [userName, setuserName] = useState("");
  const [error, setError] = useState(null);
  const [data, setdata] = useState(null);
  const [followers, setfollowers] = useState([]);
  const [following, setfollowing] = useState([]);
  const [repos, setrepos] = useState([]);
  const ChangeHandler = (e) => {
    setuserName(e.target.value);
  };

  const searchHandler = async () => {
    setError(null);
    setdata(null);
    setfollowers([]);
    setfollowing([]);
    setrepos([])

    try {
      let response = await fetch(`https://api.github.com/users/${userName}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User not found. Please check the username and try again.");
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }
      let userData = await response.json();
      setdata(userData);
      console.log(userData);
    } catch (error) {
      setError(error.message);
      console.error("Failed to fetch user data:", error);
    }
  };

  const followingHandler = async () => {
    if (!data || !data.following_url) {
      console.error("User login is not available");
      return;
    }
    try {
      let response = await fetch(`https://api.github.com/users/${data.login}/following`);
      // let response = await fetch(data.following_url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const followingData = await response.json();
      console.log(followingData);
      setfollowing(followingData);
    } catch (error) {
      console.error("Failed to fetch following:", error);
    }
  };

  const followerHandler = async () => {
    if (!data || !data.followers_url) {
      console.error("Followers URL is not available");
      return;
    }
    try {
      let responce = await fetch(data.followers_url);
      if (!responce.ok) {
        throw new Error(`HTTP error! status: ${responce.status}`);
      }
      responce = await responce.json();
      console.log(responce);
      setfollowers(responce);
    } catch (error) {
      console.error("Failed to fetch followers:", error);
    }
  };
  const reposHandler = async () => {
    if (!data || !data.login) {
      console.error("User login is not available");
      return;
    }
    try {
      let response = await fetch(`https://api.github.com/users/${data.login}/repos`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const reposData = await response.json();
      console.log(reposData);
      setrepos(reposData);
    } catch (error) {
      console.error("Failed to fetch repositories:", error);
    }
  };

  return (

    <div className="flex flex-col item-center justify-center text-center  mb-8 p-4 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg shadow-lg">

      <h1 className="m-6 text-blue-800 text-4xl font-extrabold tracking-wide">
        GitApp
      </h1>


      <div className="text-center space-x-2 mb-6">
        {/* <span className="text-blue-800 font-medium">Enter Username to Search</span> */}
        <input
          type="text"
          placeholder="Enter user name"

          className="w-full max-w-md border border-gray-300 rounded-md px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:border-indigo-500 shadow-lg shadow-blue-400 transition-all duration-300"


          onChange={ChangeHandler}
        />
        <button
          className="px-4 py-2 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 shadow-lg shadow-blue-400 transition duration-300"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>

      {/* User Information */}
      {data && (
        <div className="text-center mt-8 p-4 bg-white rounded-md shadow-md">
          <h1 className="text-indigo-600 text-3xl font-bold mb-4">GitHub User</h1>
          <img
            src={data.avatar_url}
            width={120}
            className="mx-auto mt-4 rounded-full border-4 border-indigo-300"
            alt="User Avatar"
          />
          <h2 className="text-gray-700 mt-4 font-medium">
            <span className="font-bold">Bio:</span> {data.bio || 'No bio available'}
          </h2>
          <h2 className="text-gray-700 font-medium mt-2">
            <span className="font-bold">Followers:</span> {data.followers}
            <span className="font-bold ml-3 ">Follow:</span> {data.following}
          </h2>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 mt-6 transition duration-300"
              onClick={followerHandler}
            >
              Get Followers
            </button>
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 mt-6 transition duration-300"
              onClick={followingHandler}
            >
              Get Following
            </button>
            {/* <Link href="/repoes"> */}
            <button
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 mt-6 transition duration-300"
              onClick={reposHandler}
            >
              Get Repositories
            </button>
            {/* </Link> */}
          </div>
        </div>
      )}

      {/* Followers Table */}

      <div className="w-full mt-10 overflow-x-auto">
        {followers.length >= 1 && (
          <div className="shadow-md rounded-lg overflow-hidden">
            <h1 className="my-3 font-bold  text-center text-2xl text-indigo-700 ">Followers</h1>
            <table className="min-w-full table-auto bg-white">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-center text-sm font-medium uppercase">ID</th>
                  <th className="px-6 py-3 text-center text-sm font-medium uppercase">Avatar</th>
                  <th className="px-6 py-3 text-center text-sm font-medium uppercase">Name</th>
                  <th className="px-6 py-3 text-center text-sm font-medium uppercase">Type</th>
                </tr>
              </thead>
              <tbody>
                {followers.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-200 transition duration-200"
                  >
                    <td className="px-6 py-4 text-center text-gray-700 font-medium">{item.id}</td>
                    <td className="px-6 py-4 text-center">
                      <img
                        src={item.avatar_url}
                        width={50}
                        alt="Avatar"
                        className="rounded-full mx-auto border-2 border-indigo-300"
                      />
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">{item.login}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{item.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>


      <div className="w-full mt-10 overflow-x-auto">
        {following.length >= 1 && (

          <div className="shadow-md rounded-lg overflow-hidden">
            <hr className="w-full h-0.5 mx-auto my-6 bg-indigo-400 border-0 rounded-md" />
            <h1 className="my-3 text-center font-bold text-2xl text-indigo-700 ">Following</h1>
            <table className="min-w-full table-auto bg-white">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-center text-sm font-medium uppercase">ID</th>
                  <th className="px-6 py-3 text-center text-sm font-medium uppercase">Avatar</th>
                  <th className="px-6 py-3 text-center text-sm font-medium uppercase">Name</th>
                  <th className="px-6 py-3 text-center text-sm font-medium uppercase">Type</th>
                </tr>
              </thead>
              <tbody>
                {following.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-200 transition duration-200"
                  >
                    <td className="px-6 py-4 text-center text-gray-700 font-medium">{item.id}</td>
                    <td className="px-6 py-4 text-center">
                      <img
                        src={item.avatar_url}
                        width={50}
                        alt="Avatar"
                        className="rounded-full mx-auto border-2 border-indigo-300"
                      />
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">{item.login}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{item.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
      {repos.length >= 1 && (
        <div className="shadow-md rounded-lg overflow-hidden mt-10">
          <h1 className="my-3 text-center font-bold text-2xl text-indigo-700">Repositories</h1>
          <table className="min-w-full table-auto bg-white">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3 text-center text-sm font-medium uppercase">ID</th>
                <th className="px-6 py-3 text-center text-sm font-medium uppercase">Name</th>
                <th className="px-6 py-3 text-center text-sm font-medium uppercase">Visibility</th>
                <th className="px-6 py-3 text-center text-sm font-medium uppercase">URL</th>
              </tr>
            </thead>
            <tbody>
              {repos.map((repo) => (
                <tr key={repo.id} className="hover:bg-gray-200 transition duration-200">
                  <td className="px-6 py-4 text-center text-gray-700 font-medium">{repo.id}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{repo.name}</td>
                  <td className="px-6 py-4 text-center text-gray-700">{repo.visibility}</td>
                  <td className="px-6 py-4 text-center text-indigo-600 underline">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      View Repo
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Separator */}
      <hr className="w-full h-0.5 mx-auto my-6 bg-indigo-400 border-0 rounded-md" />
    </div>

  );
};

export default GitApp;
