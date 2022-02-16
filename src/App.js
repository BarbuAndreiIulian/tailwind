import "./App.css";

function App() {
  return (
    <div
      className="App"
      class="flex  font-sans flex-col justify-center items-center bg-gray-900 w-screen h-screen"
    >
      <div class="bg-green-400  rounded-md w-96">
        <div class>
          <h2 class=" bg-gray-200 p-4  rounded-t-md pb-8">
            The title of the card here
          </h2>
        </div>
        <div class="bg-white pb-8">
          <div class="p-4 flex justify-between">
            <p class="bg-orange-300 w-28 rounded-full text-center  px-1 py-1   justify-space-between text-white uppercase text-sm ">
              under review
            </p>

            <p class=" ">May 14, 1988</p>
          </div>
          <div class="bg-white  flex justify-center pt-12">
            <h2 class="w-72  bg-gray-200  rounded-md pl-3 pr-3 pt-2 pb-2">
              Here is a short comment about this employee
            </h2>
          </div>
        </div>

        <div class="bg-gray-200 rounded-b-md pt-3 pb-3 flex flex-col pl-4">
          <p class="text-gray-400 text-xs font-bold">EMPLOYEE</p>
          <div class="flex items-center">
            <h2 class="flex font-bold text-white justify-center items-center h-10 w-10  bg-blue-400 rounded-full ">
              BA
            </h2>
            <div class="pl-4 ">
              <h2 class="font-bold">Barbu Andrei</h2>
              <p class="text-gray-400 font-sbold">Instructor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
