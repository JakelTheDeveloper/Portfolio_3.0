import React from 'react'

function AboutArticle(props) {
    return (
        <article id="about">
            <h2>About Me</h2>
            <div className='group'>
              <div className="item">
                <p>When I was 8 years old, I developed a keen interest in computers
                and how they work. I was particularly interested in game development
                and AI. I was amazed that a computer could compete against me in a video
                game and win. I remember wanting to go to a game programming camp and it
                being way too expensive for my parents at the time. I continued
                to read up on resources and draw out games on paper until I finally stumbled across
                Adobe Flash 4 years later. That's when my life changed and I became one of the 
                happiest kids on Earth.
                    <br/>
                    When I heard that Adobe Flash was being depracated, I decided to enroll into
                  Thinkful's Engineering Immersion course to gain knowledge in web design. I wanted
                  to continue developing web games and also create awesome websites and servers for future
                  projects. I'm very eager to learn new things and apply them to my current aresnal of skills.
                  <br/>
                    Outside of coding, I love to make music, draw, play golf, and basketball.
                    I have 2 kids, Kalen and Kaleena, whom are both very loving, energetic
                    and always give me a daily reminder of the joys of life. They both love to play my games
                    and always tell me how cool it is to have a programmer dad! It doesn't get much better 
                    than that. &#128513;
                </p>
                <h3>Services</h3>
                <section id="bg-callout">
                  <ul>
                    <li>Desktop and Web Apps</li>
                    <li>Mobile Apps</li>
                    <li>Games</li>
                    <li>Databases</li>
                    <li>Servers</li>
                  </ul>
                </section>
              </div>
            </div>
          </article>
    )
}

export default AboutArticle