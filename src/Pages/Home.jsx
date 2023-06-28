import { useState } from "react";
import Project from "../Components/Project";

import data from '../data/projects.json';

const Home = () => {
  const [projects, setProjects] = useState(data);
  
  return <>
    <h1>Lorem Ipsum</h1>
    {/* <h1>Desenvolvedor Fullstack</h1> */}

    <hr />

    <div>
      {projects.map(project => <Project {...project} />)}
    </div>
  </>
}

export default Home;