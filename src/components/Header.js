import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'


class Header extends React.Component {


    render() {
        return (

            <header id="header">

                <div className="inner">
                      <a href="/" className="image avatar"><img src={avatar} alt="Avatar" /></a>


                    <h1><strong>My name is Dac</strong>, Full Stack Developer |<br /> Java | Javascript (React, Vue, Angular) | Node.js | Python | C | x86 | Problem Solver<br />
                    </h1>
                </div>

                <Footer />
            </header>
        )
    }
}

export default Header
