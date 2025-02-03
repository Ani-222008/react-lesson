import Header from "./components/layouts/Header";
import Hero from "./components/blocks/Hero";
import Container from "./components/Container";
import { cards } from "./data/home/aboutCards";
import Card from "./components/ui/Card";
import VideoFrame from "./components/blocks/VideoFrame";
import { Button } from "@material-tailwind/react";

function App() {
  return (
    <>
        <Header />
        <Hero />
        <Button>Material Button</Button>
        <Container>
          <div className="grid md:grid-cols-3 gap-10">
              {cards.map((card, idx) => (
                <Card key={idx} {...card}/>
              ))}
          </div>
        </Container>

        <VideoFrame />
    </>
  );
}

export default App;
