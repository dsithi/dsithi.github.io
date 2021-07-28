import React from 'react';
import ProjectThumbnail from './ProjectThumbnail';
import {data} from '../project_data';

const Projects = () => {
    return (
        <div className="Projects">
            { /* map data and create project thumbnails */ }
            {data.map(project => 
                <ProjectThumbnail key={project.id} data={project} />
            )}

        </div> 
    )
}

export default Projects;