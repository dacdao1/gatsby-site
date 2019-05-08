import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'


import full01 from '../assets/images/fulls/01.gif'
import full02 from '../assets/images/fulls/02.gif'
import full03 from '../assets/images/fulls/03.gif'
import full04 from '../assets/images/fulls/04.gif'


const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Software Engineering Senior Project', description: 'Created with HTML, CSS and Electron.js'},
    { id: '2', src: full02, thumbnail: thumb02, caption: '90s website', description: 'Created with HTML5 and CSS3'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Recipe website', description: 'Created with Vue and Nuxt.js'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Freeing Return', description: 'Created with HTML, CSS and vanilla JavaScript.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Dac Dao | Software Engineer"
        const siteDescription = "Dac Dao, Software Engineer with the passion for continue learning. Java, Javascript (Angular, Vue, React), C. Atlanta, Georgia"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="google-site-verification" content="JcK1bw7U7khdM0z4EjaGuUvVJUE_1HDcGgskzppjgwk" />
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>A Software Engineer that wants to be a part of a great team and help build something great. </h2>
                        </header>
                        <p>I graduated with a Computer Science Degree at Georgia State University, and my love for programming goes as far back as the 90s were when I was about 12 years old. I learn to program and write codes with HTML and CSS to create a website dedicated to my favorite cartoons in the late 90s, and now I can say that my skills have improved so much since then. If you want to know more about me, please click the button to know more about me.</p>
                        <ul className="actions">
                            <li><a href="AboutMe" className="button">Learn More</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>
                        <h4>Please click on the "full portfolio" button to access the source code</h4>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="Portfolio" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Resume</h2>
                        <p>Here is a quick summary of my resume:</p>
                        <ul>
                            <li>Graduated with a Computer Science Degree, class of 2018.</li>
                            <li>Team leader/Scrum master for my senior project</li>
                            <li>Experienced programming in Javascript, Java, C, Python and several others programming languages and techniques.</li>
                            <li>Works on two different open source projects.</li>
                            <ol>
                                <li><a href="https://github.com/Kentico/kentico.github.io">Kentico</a>. I mostly work on this the issue of fixing and reorganizing the SCSS files and CSS files for this entire project.</li>
                                <li><a href="https://github.com/CiviWiki/OpenCiviWiki">OpenCiviWiki</a>. I created an "exit" button to help close the edit profile page. To achieve this task, I used JavaScript to build on top of their existing application and successfully completed this task.</li>
                            </ol>
                        </ul>
                        <p>You can download my full resume by clicking on the button below.</p>
                            <ul className="actions">
                                <li><a href="https://drive.google.com/file/d/1KqVQ8huN5URqAQIGEZXLTu5e_hIzTpxm/view?usp=sharing" className="button">Download</a></li>
                            </ul>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
