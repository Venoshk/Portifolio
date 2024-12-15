import { Header } from "../../Components/Header/Header";
import { ParticlesComponent } from "../../Components/Particles";
import { Title } from "../../Components/Title/Title";

import "./Home.css";
export const Home = () => {


  return (
    <main>
      <Header />
      <ParticlesComponent />
      <div className="">
        <Title />
      </div>
    </main>
  );
};
