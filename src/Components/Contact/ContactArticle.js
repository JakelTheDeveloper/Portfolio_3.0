import React from 'react'
import './ContactArticle.css'
function ContactArticle(props) {
    return (
        <article id="contact">
            <h2>Contact Me</h2>
            <div>
                <div className="item">
                    <form
                        action="https://formspree.io/f/xknpeodq"
                        method="POST"
                    >
                        <label>
                            Your email:<br/>
                        <input type="text" name="_replyto" />
                        </label>

                        <label>
                            Your message:<br/>
                        <textarea name="message" />
                        </label>
                        <div>
                        <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
                <div className="item item2">
                    <div className = "contactInfo">
                    <p><a href="mailto:you@gmail.com" target="_blank" rel="noopener noreferrer">Email Me</a></p>
                    <p><a href="https://github.com/JakelTheDeveloper" target="_blank" rel="noopener noreferrer">GitHub</a></p>
                    <p><a href="https://www.linkedin.com/in/jakel-jenkins-a91b11a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ContactArticle