import React from 'react'

function AboutArticle(props) {
    return (
        <article id="about">
            <h2>About Me</h2>
            <div className='group'>
              <div className="item">
                <p>When I was eight years old, I developed a keen interest in computers and how they work.
                   I was particularly interested in game development and AI. I was amazed that a computer could
                   compete against me in a video game and win. I remember wanting to go to a game programming camp,
                   but it was way too expensive for my parents at the time. I continued to read up on resources and
                   draw out games on paper until I finally stumbled upon Adobe Flash four years later. That's when my
                   life changed. I became one of the happiest kids on Earth.
                    <br/>
                      Upon hearing that Adobe Flash was facing deprecation, I decided to enroll 
                    in Thinkful's Engineering Immersion course to study full-stack web development.
                    I wanted to continue developing web games and also create awesome websites and servers
                    for future projects. I'm eager to learn new things and apply them to my current arsenal
                    of skills. I've made new friends since joining Thinful and have learned a lot from them. 
                    I really enjoy working in team settings and communicating ideas to come up with solutions
                    to our projects. The whole Thinkful experience was a very rewarding one. I'm excited to find
                    <br/>a great team and apply my newfound knowledge. 
                    <br/>
                      Outside of coding, I love to make music, draw, play golf, and basketball.
                    I have two kids, Kalen and Kaleena, who are both very loving, energetic and always give me a 
                    daily reminder of the joys of life. They both love to play my games
                    and always tell me how cool it is to have a programmer-dad! It doesn't get much better 
                    than that.<br/> &#128513;
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