import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div>
        <div className="grid grid-cols-12 gap-2 m-4">
          <div className="col-span-6 bg-green-300">container 1</div>

          <div className="col-span-6 bg-yellow-200">Container 2</div>
        </div>

        <div className="grid grid-cols-12 gap-2 m-4">
          <div className="col-span-8 bg-green-300">container 1</div>

          <div className="col-span-4 bg-yellow-200">Container 2</div>
        </div>

        <div className="grid grid-cols-12 gap-2 m-4">
          <div className="col-span-4 bg-green-300">container 1</div>

          <div className="col-span-4 bg-yellow-200">Container 2</div>

          <div className="col-span-4 bg-red-500">Container 3</div>
        </div>

        <div className="grid grid-cols-12 gap-2 m-4">
          <div className="col-span-4 bg-green-300">container 1</div>

          <div className="col-span-4 bg-yellow-200">Container 2</div>

          <div className="col-span-2 bg-red-500">Container 3</div>

          <div className="col-span-2 bg-blue-500">Container 4</div>
        </div>
      </div>
    </>
  );
}

export default Home;
