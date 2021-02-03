import React from 'react'
import './Portfolio.css'
import GambleIcon from '../../images/GambleIcon.png'
import WriterzIcon from '../../images/WriterzIcon.png'
import SpacedIcon from '../../images/SpacedIcon.png'

import PortfolioItem from './PortfolioItem'
function PortfolioArticle(props) {
    let project1Deets = [
        "Gamble Fighterz is a Slots and RPG inspired project.",
        " Users will start with 100 credits and can bet up to a maximum of 3 credits per bet.",
        " After betting, press the spin button and test your luck. Users will progress through",
        " levels when they reach the required score for that level. The game is over when credits",
        " reach 0. Choose to play again and or submit your score! I created this app to challenge",
        " my current React knowledge to make my first web and mobile responsive game!"
    ]
    let project2Deets = [
        "Ghostwriterz is an app designed to help music artists",
        " with writer's block. As a music artist, it is sometimes",
        " frustrating trying to come up with a good song idea.",
        " Users can sign up, create, and share lyrics",
        " with each other to use in a song, or just for song ideas.",
        " I created this app to expand my knowledge in connecting client",
        " webs apps to a backend server using Node & PostgreSQL.",
        <br key = "0"/>,
        <br key = "1"/>,
        <br key = "2"/>,
        <br key = "3"/>
    ]                           
    let project3Deets = [
        "The spaced repetition technique is a method where the person is",
        " asked to remember a certain fact with the time intervals increasing",
        " each time the fact is presented or said. This app incorporates this",
        " technique using a linked list to learn a new language.",
        " I created this app to help solidify my knowledge of Linked List",
        " data structures in web development.",
        <br key = "0"/>,
        <br key = "1"/>,
        <br key = "2"/>,
        <br key = "3"/>
    ]
                         
    return (
        <article id="portfolio">
            <h2>Portfolio</h2>
            <div className="group">
                <PortfolioItem
                    img={GambleIcon}
                    alt="Gamble Fighterz"
                    name="Gamble Fighterz"
                    details={project1Deets}
                    git="https://github.com/JakelTheDeveloper/gamble-fighterz-app"
                    live="https://gamble-fighterz.vercel.app"
                />
                <br/>
                <PortfolioItem
                    img={WriterzIcon}
                    alt="Ghostwriterz"
                    name="Ghostwriterz"
                    details={project2Deets}
                    git="https://github.com/JakelTheDeveloper/ghostwriterz-app-client"
                    live="https://ghostwriterz-app.vercel.app"
                />
                <br/>
                <PortfolioItem
                    img={SpacedIcon}
                    alt="Spaced Repitition"
                    name="Spaced Repetition"
                    details={project3Deets}
                    git="https://github.com/JakelTheDeveloper/spaced-repetition-client"
                    live="https://spaced-repetition-gray.vercel.app"
                />

            </div>
        </article>
    )
}

export default PortfolioArticle