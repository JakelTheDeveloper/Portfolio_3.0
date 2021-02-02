import React from 'react'

function PortfolioItem(props) {
    return (
        <div className="item item2">
            <div className = "centerImage">
            <img className = "icon" src={props.img} alt={props.alt} />
            </div>
            <h3>{props.name}</h3>
            <p>
                {props.details}
            </p>
            <h3>Stacks Used</h3>
            <div className="stack">

                <ul>
                    <li>Javascript(React)</li>
                    <li>CSS3</li>
                    <li>HTML5</li>
                    <li>PostgreSQL</li>
                    <li>Node(Express)</li>
                </ul>
            </div>
            <br />
            <div className="project-links">
                <p>
                    <a className = "link" href={props.git} target="_blank" rel="noopener noreferrer"
                    >GitHub Link</a>
                </p>

                <p>
                    <a className = "link" href={props.live} target="_blank" rel="noopener noreferrer">Project Live Link</a>
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem