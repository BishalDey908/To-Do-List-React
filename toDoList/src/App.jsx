import Todo from "./components/todo"


function App() {
  

  return (
    <>
    <div className="bg-green-300  xl:h-[600px] xl:w-[600px] xl:pt-5 md:w-[555px] md:h-[580px] md:pt-5 w-[350px]  h-[624px] mt-12 pt-2 rounded-xl shadow-lg shadow-black">
      <h1 className="xl:text-4xl md:text-4xl text-center text-2xl">To-Do-List</h1>
      <Todo/>
    </div>
    </>
  )
}

export default App
