import React from 'react';
import Button from './Button';

const ProjectThumbnail = ({ data }) => {
    return (
        <div className="Project-Thumbnail">
            <img className="thumbnail" src={data.img} />
            <div className="information">
                <h1 className="title">{data.name}</h1>
                <p className="desc">{data.desc}</p>
            </div>
            <Button data={data}/>
        </div>
    )
}

export default ProjectThumbnail;