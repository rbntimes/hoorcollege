import Chart from "../components/Chart";

export default () => (
  <div className="container">
    <Chart />
    <style jsx global>{`
      body {
        font-family: sans-serif;
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        display: grid;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
);
