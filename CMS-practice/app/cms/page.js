import client from "../lib/contentfulClient";

const fetchServices = async () => {
  let responce = await client.getEntries({ content_type: "services" });

  // console.log(responce);
};

const CmsPractice = async () => {
  const services = await fetchServices();
  return <div> my page </div>;
};

export default CmsPractice;
