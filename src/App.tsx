import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./sections/Main";

function App() {
  return (
    <div className="h-screen bg-bg1">
      <Header />
      <div className="border-b border-[#43454D] flex-grow"></div>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
