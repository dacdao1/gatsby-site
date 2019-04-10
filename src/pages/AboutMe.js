import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'




class AboutMe extends React.Component {



    render() {
        const siteTitle = "Dac Dao | About Me"
        const siteDescription = "Dac Dao, Software Engineer. Web Developer. Java, Javascript (Angular, Vue, React), C. Atlanta, Georgia"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>More information about myself and what my past experiences. </h2>
                        </header>
                        <p><strong>Computer Science major graduate (GSU class of '18)</strong> that have built software with <strong>C, x86 (Assembly), Javascript (Vue, Nuxt, React, Electron and Angular) and Python.</strong> However, Java will always be my first love.<br/><br/>

I have <strong>experiences working for two different start-up company here in Atlanta</strong>. With one of the company, I was able to create a Python software that would data scraped different restaurant websites and Craiglist to retrieve contact information and develop new leads for the sales team. I also created a mock site for the other start-up company here in Atlanta, with using mostly HTML, CSS, and Javascript. I'm most proud of my Software Engineer class project. Our group apply the Agile methodology to sprint to the finish line and present the final product to our professor. We built a desktop application with HTML, CSS, and Javascript (Electronjs).<br/><br/>

I also was lucky enough to be a <strong>part of two different open source projects</strong>, <a href="https://github.com/Kentico/kentico.github.io">Kentico</a> and <a href="https://github.com/CiviWiki/OpenCiviWiki">OpenCiviWiki</a>, while the issues that I worked on for both open sources software were different but the result is gratifying. With Kentico, I edited the index.scss file to optimized all of the variables and mixin to be more organized and scalable. Moreover, with OpenCiviWiki, I used Docker to replicate the development environment on a personal desktop, and I mostly worked on the Edit profile exit button.<br/><br/>

My strength is understanding the concept of programming and problem-solving. I can learn a new programming language to help aid me to achieve my goal of solving a specific problem. My weakness would be not able to find the right answer right away; I still need a little bit of effort and time to works out all of the challenges. But I think that my strong suit, being very stubborn, that I will find the solution somehow.<br/><br/>

To find all of my works, codes, and project. Please feel free to click <a href="Portfolio">here</a> to go to my portfolio section or click on the Github icon below. I look forward to working with you.

</p>




                        <ul className="actions">
                            <li><a href="https://github.com/dacdao1" className="icon fa-GitHub">Github</a></li>
                        </ul>

                        <ul className="actions">
                            <li><a href="/" className="button">Home</a></li>
                        </ul>
                    </section>




                </div>

            </Layout>
        )
    }
}

export default AboutMe
