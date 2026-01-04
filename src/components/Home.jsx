import { locations } from "@constants/location";
import { useGSAP } from "@gsap/react";
import { useLocationStore } from "@store/location";
import useWindowStore from "@store/window";
import Draggable from "gsap/Draggable";
import React from "react";

const projects = locations.work?.children ?? [];

const Home = () => {

    const { openWindow } = useWindowStore()
    const { setActiveLocation } = useLocationStore();
    
    const handleOpenProject = (project) => {
        setActiveLocation(project);
        setTimeout(() => {
            openWindow("finder");
        }, 0);
    }

    useGSAP(() => {
        Draggable.create(".folder")
    },[])
	return (
		<section id="home">
			<ul>
				{projects.map((project) => (
                    <li key={project.id} className={`group folder ${project.position}`}
                    onDoubleClick={() => handleOpenProject(project)}>
                        <img src={"/images/folder.png"} alt={project.name} />
                        <p>{project.name}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Home;
