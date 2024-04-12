import client from "../lib/contentfulClient";

const fetchAboutData = async () => {
  let responce = await client.getEntry({ content_type: "About" });
  // console.log(responce);
  const About = responce.items.map((item) => {
    return {
      name: item.fields.name,
      address: item.fields.address,
      description: item.fields.description,
    };
  });
  return About;
};

const About = async () => {
  const About = await fetchAboutData();
  console.log(About);
  return (
    <div className="text-center">
      <h1>Hellow World</h1>
      <h1>2nd entries</h1>
      {About.map((item) => {
        return (
          <div>
            (<h1>{item.Name}</h1>), (<h2>{item.Address}</h2>), (
            <h3>{item.Description}</h3>)
          </div>
        );
        <hr />;
      })}
    </div>
  );
};

export default About;
