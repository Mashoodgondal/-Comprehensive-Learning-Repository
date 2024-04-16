import client from "../lib/contentfulClient";

const fetchServices = async () => {
  let responce = await client.getEntries({ content_type: "services" });

  const services = responce.items.map((item) => {
    return {
      title: item.fields.title,
      description: item.fields.description,
      image: item.fields.image.fields.file.url,
    };
  });
  return services;
};

const CmsPractice = async () => {
  const services = await fetchServices();
  console.log(services);
  // console.log(responce);
  return (
    <div>
      {" "}
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1>
      {/* <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1> */}
      {services.map((service, i) => {
        return (
          <div className="text-center m-4 p-4 space-y-4 ">
            <h1 key={i}>{service.title}</h1>
            <h2>{service.description}</h2>
            <img src={service.image} alt="" width={100} className="mx-auto" />
            <hr className="h-2 " />
          </div>
        );
      })}
    </div>
  );
};

export default CmsPractice;

{
  /* <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1> 
       <h1 className="text-3xl text-center text-indigo-500 font-bold ">
         Get Data from Contentful CMS{" "}
       </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
         Get Data from Contentful CMS{" "}
       </h1>
       <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
     </h1>*/
}
{
  /* <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1> 
       <h1 className="text-3xl text-center text-indigo-500 font-bold ">
         Get Data from Contentful CMS{" "}
       </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
         Get Data from Contentful CMS{" "}
       </h1>
       <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
     </h1>*/
}
{
  /* <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
      </h1> 
       <h1 className="text-3xl text-center text-indigo-500 font-bold ">
         Get Data from Contentful CMS{" "}
       </h1>
      <h1 className="text-3xl text-center text-indigo-500 font-bold ">
         Get Data from Contentful CMS{" "}
       </h1>
       <h1 className="text-3xl text-center text-indigo-500 font-bold ">
        Get Data from Contentful CMS{" "}
     </h1>*/
}
