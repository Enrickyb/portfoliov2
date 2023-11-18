import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./sections/Main";

function App() {
  return (
    <>
      <div className="h-screen bg-bg2">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
