import AllRoutes from "./routes/AllRoutes"
import {Header, Footer} from "./components"

function App() {


  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Header />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
