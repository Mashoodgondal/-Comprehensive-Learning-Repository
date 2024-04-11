import client from "../lib/contentfulClient";

const fetchAboutData = async () => {
  let responce = await client.getEntries({ content_type: "About" });

  const About = responce.items.map((item) => {
    return {
      Name: item.fields.Name,
      Address: item.fields.Address,
      Description: item.fields.Description,
    };
  });
  return About;
};

const About = async () => {
  const About = await fetchAboutData();
  console.log(About);
  return (
    <div className="text-center">
      <h1>2nd entries</h1>
      {About.map((item) => {
        return (
          (<h1>{item.Name}</h1>),
          (<h2>{item.Address}</h2>),
          (<h3>{item.Description}</h3>)
        );
        <hr />;
      })}
    </div>
  );
};

export default About;
