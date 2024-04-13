// import client from "../lib/contentfulClient";

// const fetchAboutData = async () => {
//   let responce = await client.getEntry({ content_type: "About" });
//   // console.log(responce.fields);
//   const About = responce.items.map((item) => {
//     return {
//       name: item.fields.name,
//       address: item.fields.address,
//       description: item.fields.description,
//     };
//   });
//   return About;
// };

// const About = async () => {
//   const About = await fetchAboutData();
//   // console.log(About);
//   return (
//     <div className="text-center">
//       <h1>Hellow World</h1>

//       <h1>2nd entries</h1>
//       {About.map((itm) => {
//         return (
//           <div>
//             (<h1>{itm.Name}</h1>), (<h2>{itm.Address}</h2>), (
//             <h3>{itm.Description}</h3>)
//           </div>
//         );
//         <hr />;
//       })}
//     </div>
//   );
// };

// export default About;
"use client";
import React from "react";
import client from "../lib/contentfulClient";

const fetchAboutData = async () => {
  try {
    const response = await client.getEntries({ content_type: "About" });
    return response.items.map((item) => {
      return {
        name: item.fields.name,
        address: item.fields.address,
        description: item.fields.description,
      };
    });
  } catch (error) {
    console.error("Error fetching About data:", error);
    return [];
  }
};

const About = () => {
  const [aboutData, setAboutData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const about = await fetchAboutData();
      setAboutData(about);
    };
    fetchData();
  }, []);

  return (
    <div className="text-center">
      <h1>Hello World</h1>

      <h1>2nd entries</h1>
      {aboutData.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <h2>{item.address}</h2>
          <h3>{item.description}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default About;
