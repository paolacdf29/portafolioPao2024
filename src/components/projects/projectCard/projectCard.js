import './projectCard.css'

const ProjectCard = () => {
  return (
    <div className="card btn-outline-danger project-card p2 " >
      <img src="https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/04/low-fidelity-wireframes-sketching-UI-kit.png.webp" class="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-text">Proyecto 1.</p>
        <button className="btn btn-outline-dark"> ir al sitio</button>
        <a href="" className='p-2'>
          <img src="https://skillicons.dev/icons?i=github" />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard;