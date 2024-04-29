import Head from "next/head";

export default function Hometm() {
  return (
    <div>
      <Head>
        <title>Real-Time Clock with Next.js</title>
      </Head>
      <div className="flex h-screen justify-center items-center bg-blue-100">
        <div className="p-10 rounded-lg bg-white shadow-lg">
          <div
            id="timeDisplay"
            className="text-center text-2xl font-bold text-gray-800"
          >
            Current Time: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
      <script>
        {`function updateTime() {
            const now = new Date().toLocaleTimeString();
            document.getElementById('timeDisplay').innerHTML = 'Current Time: ' + now;
          }
          setInterval(updateTime, 1000);`}
      </script>
    </div>
  );
}

// export async function getServerSideProps() {
//   const serverTime = new Date().toLocaleTimeString();
//   return {
//     props: { serverTime },
//   };
// }
