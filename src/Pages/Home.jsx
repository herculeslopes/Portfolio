import { useState } from "react";
import Project from "../Components/Project";

import data from '../data/projects.json';

const Home = () => {
  const [projects, setProjects] = useState(data);

  return <>
    <div className="home">
      <h1>Lorem Ipsum</h1>
      {/* <h1>Desenvolvedor Fullstack</h1> */}

      <hr />

      <section>
        <h2>Habilidades</h2>
      </section>

      <hr />

      <section>
        <h2>Projetos</h2>
        <div className="projects-container">
          {projects.map(project => <Project {...project} />)}
        </div>
      </section>
    </div>
  </>
}

export default Home;