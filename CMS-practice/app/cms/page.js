import client from "../lib/client";
const fechServices = async () => {
  let responce = await client.getEntries({ content_type: "services" });
};

const CmsPractice = async () => {
  const services = await fechServices();
  return <div></div>;
};

export default CmsPractice;
