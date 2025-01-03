// "use client";
// import React, { useEffect, useState } from 'react';

// const Repositories = () => {
//     const [repos, setRepos] = useState([]);

//     useEffect(() => {
//         const fetchRepos = async () => {
//             try {
//                 const response = await fetch('https://api.github.com/users/{username}/repos');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setRepos(data);
//             } catch (error) {
//                 console.error("Failed to fetch repositories:", error);
//             }
//         };

//         fetchRepos();
//     }, []);

//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-extrabold text-center text-yellow-700 my-5">✨ Repositories ✨</h1>
//             {repos.length > 0 ? (
//                 <div className="overflow-x-auto shadow-lg rounded-lg">
//                     <table className="min-w-full bg-white border border-gray-200">
//                         <thead className="bg-gradient-to-r from-yellow-500 to-indigo-600 text-white">
//                             <tr>
//                                 <th className="px-6 py-3 text-sm uppercase text-center">ID</th>
//                                 <th className="px-6 py-3 text-sm uppercase text-center">Name</th>
//                                 <th className="px-6 py-3 text-sm uppercase text-center">Visibility</th>
//                                 <th className="px-6 py-3 text-sm uppercase text-center">URL</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {repos.map((repo) => (
//                                 <tr key={repo.id} className="hover:bg-indigo-100 transition duration-200">
//                                     <td className="px-6 py-4 text-center">{repo.id}</td>
//                                     <td className="px-6 py-4 text-center">{repo.name}</td>
//                                     <td
//                                         className={`px-6 py-4 text-center ${repo.visibility === 'public' ? 'text-green-600' : 'text-red-600'
//                                             }`}
//                                     >
//                                         {repo.visibility}
//                                     </td>
//                                     <td className="px-6 py-4 text-center text-indigo-600 underline">
//                                         <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
//                                             View Repo
//                                         </a>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     <div className="p-4 bg-gray-50 text-center">
//                         Total Repositories: {repos.length}
//                     </div>
//                 </div>
//             ) : (
//                 <p className="text-center text-gray-600">Loading repositories...</p>
//             )}
//         </div>
//     );
// };

// export default Repositories;



"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const Repositories = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const searchParams = useSearchParams();
    const username = searchParams.get('username') || 'default-username';
    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const username = "your-github-username"; // Replace with actual username or fetch dynamically
                const response = await fetch(`https://api.github.com/users/${username}/repos`);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setRepos(data);
            } catch (error) {
                console.error("Failed to fetch repositories:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return <p className="text-center text-gray-600 mt-10">Loading repositories...</p>;
    }

    if (error) {
        return <p className="text-center text-red-600 mt-10">Error: {error}</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-extrabold text-center text-yellow-700 my-5">✨ Repositories ✨</h1>
            {repos.length > 0 ? (
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gradient-to-r from-yellow-500 to-indigo-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-sm uppercase text-center">ID</th>
                                <th className="px-6 py-3 text-sm uppercase text-center">Name</th>
                                <th className="px-6 py-3 text-sm uppercase text-center">Visibility</th>
                                <th className="px-6 py-3 text-sm uppercase text-center">URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {repos.map((repo) => (
                                <tr key={repo.id} className="hover:bg-indigo-100 transition duration-200">
                                    <td className="px-6 py-4 text-center">{repo.id}</td>
                                    <td className="px-6 py-4 text-center">{repo.name}</td>
                                    <td
                                        className={`px-6 py-4 text-center ${repo.visibility === 'public' ? 'text-green-600' : 'text-red-600'
                                            }`}
                                    >
                                        {repo.visibility}
                                    </td>
                                    <td className="px-6 py-4 text-center text-indigo-600 underline">
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-indigo-800 transition duration-300"
                                        >
                                            View Repo
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="p-4 bg-gray-50 text-center">
                        <p className="text-gray-700">Total Repositories: {repos.length}</p>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-600">No repositories found.</p>
            )}
        </div>
    );
};

export default Repositories;
