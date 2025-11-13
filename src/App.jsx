import Navbar from "./components/navbar/Navbar";
import VideoSection from "./components/VideoSection";
import Projects from "./components/section1/Projects";
import Footer from "./components/footer/Footer";
import TextPrize from "./components/text/TextPrize";
import 'antd/dist/reset.css';


function App() {
  return (
    <div>
      <Navbar />
      <VideoSection />
      <Projects />
<TextPrize
  bgImageUrl="https://images.unsplash.com/photo-1693834084392-fa61a52a81c0?auto=format&fit=crop&w=3000&q=100"
  carouselImages={[
    "https://i.pinimg.com/736x/56/48/5d/56485d537a756cb8afe2ea919d4aa5cf.jpg",
    "https://i.pinimg.com/736x/70/c6/c6/70c6c6a69ec1f904b1b8759d77279df2.jpg",
    "https://i.pinimg.com/736x/db/38/68/db386866e01790137850786633405023.jpg",
    "https://i.pinimg.com/736x/f0/05/ae/f005ae5fc155c132dfe2fb731aadf159.jpg"
  ]}
/>
      <Footer />
    </div>
  );
}

export default App;
