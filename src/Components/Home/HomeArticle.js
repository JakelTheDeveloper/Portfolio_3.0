import React from 'react'
import flashLogo from '../../images/flashlogo.png'
import htmlLogo from '../../images/html5logo.png'
import './HomeArticle.css'
function HomeArticle(props) {
    return (
        <article id="home">
            <div className='group'>
                <div className="item">
                    <img className = "me" src={props.self} alt="self-portrait" />
                </div>
                <div className="item">
                    <h2>Hello!</h2>
                    <p>My name is Ja'Kel Jenkins and I'm a software engineer from Wilson, NC!
                    I'm a very laid back and observative person. My dream has always been to
                    create fun interactive media for the world to enjoy.</p>
                    <div className = "F2H">
                    <img className = "leftImage" src = {flashLogo} alt = "Adobe Flash Logo"/>
                    <div className = "point">&#10145;</div>
                    <img className = "rightImage" src = {htmlLogo} alt = "Adobe Flash Logo"/>
                </div>
                </div>
            </div>
        </article>
    )
}

export default HomeArticle