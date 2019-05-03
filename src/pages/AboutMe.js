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
                            <h2>More information about myself and my past experiences. </h2>
                        </header>
                        <p>

<strong>Computer Science Graduate (GSU class of 2018)</strong> experienced in building software with <strong>Java, C, x86 (Assembly), JavaScript (Vue, Nuxt, React, Electron and Angular) and Python.</strong> Even though I’ve gained experience in these other languages, Java will always be my first love.<br/><br/>

I have worked for <strong>two different start-up companies here in Atlanta</strong>. At one of these companies, I created a Python software that data scraped various restaurant websites and Craigslist to retrieve contact information and develop new leads for the sales team based off of this information. I also created a mock site for the other start-up company using mostly HTML, CSS, and JavaScript. Looking at all of my projects, I'm proudest of my Software Engineering class project. Our group applied the Agile methodology to build a desktop application with HTML, CSS, and JavaScript (ElectronJS). <br/><br/>

I’ve also had the opportunity to work on <strong>two different open source projects,</strong> <a href="https://github.com/Kentico/kentico.github.io">Kentico</a> and <a href="https://github.com/CiviWiki/OpenCiviWiki">OpenCiviWiki</a>. With Kentico, I edited the index.scss file to optimize all the variables and mixin to increase organization and scalability. With OpenCiviWiki, I used Docker to replicate the development environment on a personal desktop, and I worked on the ‘Edit Profile’ exit button.
<br/><br/>

My strengths are understanding the concepts behind programming and then applying those concepts through excellent problem-solving. I’m an avid learning and can quickly learn new programming languages.<br/><br/>

To find all of my works, codes, and project, please feel free to click <a href="Portfolio">here</a> to go to my portfolio section or click on the Github icon below. I look forward to working with you.

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
