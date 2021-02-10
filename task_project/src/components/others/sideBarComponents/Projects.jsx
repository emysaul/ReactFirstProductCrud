import ProjectList from "./ProjectList"

export default ({projects}) => {
    return (
      <div className="projects">
        <h4>Tus Proyectos</h4>
        <p>No hay proyectos, comienza creando uno</p>
        <ProjectList/>
      </div>
    );
}