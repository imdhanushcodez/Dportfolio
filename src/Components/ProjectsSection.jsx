import React from 'react'
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PARADISE - A RURAL APP",
    description: "a App for a rural MSME Community to develop their Business",
    image: "/projects/pb.png",
    tags: ["JAVA", "Android Studio", "FireBase"],
    demoUrl: "#",
    githubUrl: "https://github.com/imdhanushcodez/Paradise-Ruralapps",
  },
    {
    id: 2,
    title: "ONE MORE MILE",
    description: "a App for a Travelers who travel across world",
    image: "/projects/ob.png",
    tags: ["JAVA", "Android Studio", "FireBase"],
    demoUrl: "#",
    githubUrl: "https://github.com/imdhanushcodez/onemoremile2",
  },

    {
    id: 3,
    title: "LOGISTICS",
    description: "a App for a Logistics managment company",
    image: "/projects/lb.png",
    tags: ["JAVA", "Android Studio", "FireBase"],
    demoUrl: "#",
    githubUrl: "https://github.com/imdhanushcodez/logisticdriver",
  },

   {
    id: 4,
    title: "PASSENGER PRO",
    description: "a App for Local Bus Passenger",
    image: "/projects/ppb.png",
    tags: ["JAVA", "Android Studio", "FireBase"],
    demoUrl: "#",
    githubUrl: "https://github.com/imdhanushcodez/passengerproapp",
  },

   {
    id: 5,
    title: "DEVELOPERFAB ",
    description: "a WebSite for our saas based startup",
    image: "/projects/dfb.png",
    tags: ["HTML & CSS", "JS", "Netlify"],
    demoUrl: "https://developerfab.netlify.app/",
    githubUrl: "https://github.com/imdhanushcodez/Developersfab",
  },


];


function ProjectsSection() {
  return (
     <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag,ind) => (
                    <span key={ind} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20}  />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/imdhanushcodez"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection