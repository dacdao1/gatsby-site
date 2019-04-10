import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">

                    <li><a href="https://github.com/dacdao1" className="icon fa-github"><span className="label">Github</span></a></li>

                    <li><a href="https://www.linkedin.com/in/dac-dao/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>

                    <li><a href="mailto:dacdao01@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>

                    </ul>

                    <ul className="copyright">
                        <li>Created with Gatsby JS</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
