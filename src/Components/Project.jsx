import { FaWindows, FaLinux, FaApple, FaChrome } from "react-icons/fa"
const Project = (props) => {
  // ["windows", "linux", "mac", "ios", "android", "web"]

  const {
    img,
    name,
    organization,
    description,
  } = props;

  return <>
    <article className="project-card-wrapper">
      <div className="project-card">
        <img src={img} alt="" className="img" />
        <div className="info">
          <h3>{name}</h3>
          <p className="description">{description}</p>

          <div className="platforms">
            <FaWindows />
            <FaLinux />
            <FaApple />
            <FaChrome />
          </div>
        </div>
      </div>
    </article>
  </>
}

export default Project;