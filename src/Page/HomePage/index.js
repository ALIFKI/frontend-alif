import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar';
import Style from './style.module.css'
import ig from '../../Assets/Image/instagram-logo.svg'
import linkedin from '../../Assets/Image/linkedin.svg'
import twitter from '../../Assets/Image/twitter.svg'
import ig_dark from '../../Assets/Image/instagram_dark.svg'
import ReactPlayer from 'react-player/youtube'
import linkedin_dark from '../../Assets/Image/linked_dark.svg'
import twitter_dark from '../../Assets/Image/twitter_dark.svg'
import Slider from "react-slick";
import dimon1 from '../../Assets/Image/dimon1.png'
import dimon from '../../Assets/Image/dimon.png'
import image5 from '../../Assets/Image/5.jpg'
import Title from '../../Components/Title';
import Btn from '../../Components/Button';


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollY: 0,
            scale: 1.4,
            isMenuActive: false,
            isSticky: false,
        }

        this.projectRef = React.createRef();
        this.aboutRef = React.createRef();
        this.exp = React.createRef();


    }
    componentDidMount() {
        window.addEventListener('scroll', this._handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleScroll)
    }

    _handleScroll = (event) => {
        if (window.scrollY === 0) {
            this.setState({
                scale: 1.4,
                scrollY: 0,
            })
        } else {
            this.setState({
                scrollY: window.scrollY,
                scale: 1
            })
        }
        if (window.scrollY >= 500) {
            this.setState({
                isSticky: true
            })
        } else {
            this.setState({
                isSticky: false
            })
        }
    }
    
    _menu = () => {
        this.setState({
            isMenuActive: !this.state.isMenuActive
        })
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay : true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: null,
            prevArrow: null,
            arrows: false,
            fade: true,
            appendDots: dots => (
                <div
                style={{
                    backgroundColor: "#ddd",
                    borderRadius: "10px",
                    padding: "10px"
                }}
                >
                <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
        };
        return (
            <div className={`${Style.content}`}>
                <div className={`${Style.sideMenu} ${this.state.isMenuActive ? Style.shadow : Style.disapear}`} onClick={this._menu}>
                </div>
                <div className={`${Style.wrapper} ${this.state.isMenuActive ? Style.slidetoLeft : Style.slidetoRight}`}>
                </div>
                <div className={`${Style.background}`}>
                    <div className={`${Style.diamondxl}`} style={{ transform: 'scale(1.4) translateX(0)' }}>
                        <svg viewBox="0 0 407 407" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M58.1169 261.526C26.0198 229.429 26.0198 177.39 58.117 145.292L145.292 58.1171C177.389 26.02 229.429 26.02 261.526 58.1171L348.702 145.292C380.799 177.39 380.799 229.429 348.702 261.526L261.526 348.702C229.429 380.799 177.389 380.799 145.292 348.702L58.1169 261.526Z" fill="#242329"></path></svg>
                    </div>
                    <div className={`${Style.diamondsm}`} style={{ transform: `scale(1.4) translateX(10rem) translateY(-${this.state.scrollY}px)`, top: '500px' }}>
                        <svg viewBox="0 0 407 407" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M58.1169 261.526C26.0198 229.429 26.0198 177.39 58.117 145.292L145.292 58.1171C177.389 26.02 229.429 26.02 261.526 58.1171L348.702 145.292C380.799 177.39 380.799 229.429 348.702 261.526L261.526 348.702C229.429 380.799 177.389 380.799 145.292 348.702L58.1169 261.526Z" fill="#242329"></path></svg>
                    </div>
                    <div className={`${Style.diamondsm}`} style={{ transform: `scale(1.4) translateX(0) translateY(-${this.state.scrollY}px)` }}>
                        <svg viewBox="0 0 407 407" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M58.1169 261.526C26.0198 229.429 26.0198 177.39 58.117 145.292L145.292 58.1171C177.389 26.02 229.429 26.02 261.526 58.1171L348.702 145.292C380.799 177.39 380.799 229.429 348.702 261.526L261.526 348.702C229.429 380.799 177.389 380.799 145.292 348.702L58.1169 261.526Z" fill="#242329"></path></svg>
                    </div>
                    <div className={`${Style.diamondsm2}`} style={{ transform: `scale(1.4) translateX(0) translateY(-${this.state.scrollY}px)` }}>
                        <svg viewBox="0 0 407 407" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M58.1169 261.526C26.0198 229.429 26.0198 177.39 58.117 145.292L145.292 58.1171C177.389 26.02 229.429 26.02 261.526 58.1171L348.702 145.292C380.799 177.39 380.799 229.429 348.702 261.526L261.526 348.702C229.429 380.799 177.389 380.799 145.292 348.702L58.1169 261.526Z" fill="#46454a"></path></svg>
                    </div>
                    <div className={`${Style.diamondmd}`} style={{ transform: `scale(${this.state.scale}) translateX(0) translateY(-${this.state.scrollY}px)` }}>
                        <svg viewBox="0 0 407 407" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M58.1169 261.526C26.0198 229.429 26.0198 177.39 58.117 145.292L145.292 58.1171C177.389 26.02 229.429 26.02 261.526 58.1171L348.702 145.292C380.799 177.39 380.799 229.429 348.702 261.526L261.526 348.702C229.429 380.799 177.389 380.799 145.292 348.702L58.1169 261.526Z" fill="#242329"></path></svg>
                    </div>
                    <div className={`${Style.diamondmd2}`} style={{ transform: `scale(${this.state.scale}) translateX(0) translateY(-${this.state.scrollY}px)` }}>
                        <svg viewBox="0 0 407 407" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M58.1169 261.526C26.0198 229.429 26.0198 177.39 58.117 145.292L145.292 58.1171C177.389 26.02 229.429 26.02 261.526 58.1171L348.702 145.292C380.799 177.39 380.799 229.429 348.702 261.526L261.526 348.702C229.429 380.799 177.389 380.799 145.292 348.702L58.1169 261.526Z" fill="#242329"></path></svg>
                    </div>
                    <div className={`${Style.divide}`}>
                        <svg viewBox="0 0 407 407" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M58.1169 261.526C26.0198 229.429 26.0198 177.39 58.117 145.292L145.292 58.1171C177.389 26.02 229.429 26.02 261.526 58.1171L348.702 145.292C380.799 177.39 380.799 229.429 348.702 261.526L261.526 348.702C229.429 380.799 177.389 380.799 145.292 348.702L58.1169 261.526Z" fill="#FBFBFF"></path></svg>
                    </div>
                </div>
                <div className={`${Style.IconMenuSocial} ${this.state.isSticky ? Style.stickyRight : null}`}>
                    <div className={`${Style.iconSocial} ${this.state.isSticky ? Style.darkIcon : null}`}>
                        <a href="https://instagram.com">
                        <img src={this.state.isSticky ? ig_dark : ig} alt="" />
                        </a>
                    </div>
                    <div className={`${Style.iconSocial} ${this.state.isSticky ? Style.darkIcon : null}`}>
                        <a href="http://twitter.com">
                        <img src={this.state.isSticky ? twitter_dark : twitter} style={{ color: 'red' }} alt="" />
                        </a>
                    </div>
                    <div className={`${Style.iconSocial} ${this.state.isSticky ? Style.darkIcon : null}`}>
                        <a href="http://">
                            <img src={this.state.isSticky ? linkedin_dark : linkedin} alt="" />
                        </a>
                    </div>
                </div>
                <Container className={`m-auto ${Style.contain}`}>
                    <Navbar 
                        Scroll={this.state.scrollY} 
                        onMenuClick={this._menu} 
                        onWorkClick={()=>{this.projectRef.current.scrollIntoView({block: 'center',behavior: "smooth"})}}
                        onAboutClick={()=>{this.aboutRef.current.scrollIntoView({block: 'center',behavior: "smooth"})}}
                        onExp={()=>{this.exp.current.scrollIntoView({block: 'center',behavior: "smooth"})}}

                    >
                    </Navbar>
                    <Row style={{ height: '100vh' }}>
                        <Col md="12" ref={this.aboutRef}>
                            <div className={`d-flex flex-row justify-content-between ${Style.About}`}>
                                <div className={`${Style.description}`}>
                                    <h3 className={`${Style.title}`}>
                                        Hi, I'm Alif
                                    </h3>
                                    <p className={`${Style.span}`}>Frontend Developer</p>
                                    <p className={`${Style.textAbout}`}>
                                        Through constant practice & learning, I produce aesthetic software to an extremely high standard.
                                    </p>
                                </div>
                                <div className={`${Style.profileImage}`}>
                                    <div className={`${Style.image}`}>
                                        <img src={`https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg`} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className={`${Style.shake} d-flex flex-row align-items-center`}>
                                <div className={`${Style.scrollCircle}`}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.2744 4C12.6541 4 12.9679 4.28215 13.0176 4.64823L13.0244 4.75V19.75C13.0244 20.1642 12.6886 20.5 12.2744 20.5C11.8947 20.5 11.5809 20.2178 11.5313 19.8518L11.5244 19.75V4.75C11.5244 4.33579 11.8602 4 12.2744 4Z" fill="white" />
                                        <path d="M17.7673 13.171C18.0595 12.8775 18.5344 12.8765 18.8279 13.1687C19.0948 13.4344 19.1199 13.851 18.9027 14.1451L18.8302 14.2294L12.8062 20.2794C12.5397 20.547 12.1216 20.5714 11.8276 20.3524L11.7433 20.2794L5.71833 14.2294C5.42604 13.9359 5.42703 13.4611 5.72052 13.1688C5.98734 12.9031 6.40406 12.8797 6.69721 13.0982L6.78118 13.171L12.2751 18.687L17.7673 13.171Z" fill="white" />
                                    </svg>

                                </div>
                                <div className={`${Style.scrollY}`}>
                                    Scroll down Update from fork
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center align-items-center" ref={this.projectRef}>
                        <Col md="12">
                            <div>
                                <Title>Project</Title>
                            </div>
                        </Col>
                        <Col md="12">
                            <Slider {...settings}>
                                <div className={`${Style.sliderItem}`}>
                                    <div className={`${Style.item}`}>
                                        <div className={`${Style.video}`}>
                                            <ReactPlayer url={'https://youtu.be/UT467s5Ab9c'}
                                                controls={false}
                                                width='100%'
                                                height='100%'
                                                onPlay={() => {
                                                    console.log('play')
                                                }}
                                                style={{ height: 100 }}
                                                playing
                                                loop
                                            />
                                        </div>
                                        <div className={`${Style.picture}`}>
                                            <img src={image5} alt="" srcSet="" className={`${Style.Image}`} />
                                        </div>
                                    </div>
                                    <div className={`${Style.text}`}>
                                        <p>is a chat application with a find friends nearby feature, which is made using React Native and also express js,You can see this project in the following link</p>
                                        <Btn>Want Demo?</Btn>
                                    </div>
                                </div>
                                <div className={`${Style.sliderItem}`}>
                                    <div className={`${Style.item}`}>
                                        <div className={`${Style.video}`}>
                                            <img src={dimon1} alt="" srcSet="" className={`${Style.Image}`} />
                                        </div>
                                        <div className={`${Style.picture}`}>
                                            <img src={dimon} alt="" srcSet="" className={`${Style.Image}`} />
                                        </div>
                                    </div>
                                    <div className={`${Style.text}`}>
                                        <p>It is a retail commerce application that can be used to buy products at several retail stores, including payments and transactions</p>
                                        <Btn>Want Demo?</Btn>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                    <Row style={{marginTop : '15vh'}}>
                        <Col md="12">
                            <div className={`${Style.card}`}>
                                <Row>
                                    <Col md="6">
                                        <div className='d-flex flex-column'>
                                            <h4 className={Style.connectWithMe}>Connect With Me</h4>
                                            <p className={`text-white`}>Satisfied with me? Please contact me</p>
                                            <div>

                                            </div>
                                        </div>
                                    </Col>
                                    <Col md="6">
                                        <div className={`${Style.form}`}>
                                            <h5 className={`${Style.contactFormTitle}`}>Let’s make magic together</h5>
                                            <div className={`${Style.formGroup}`}>
                                                <input className={`${Style.inputClass}`} placeholder='Name'></input>
                                            </div>
                                            <div className={`${Style.formGroup}`}>
                                                <input className={`${Style.inputClass}`} placeholder='Email'></input>
                                            </div>
                                            <div className={`${Style.formGroup}`}>
                                                <textarea rows={5} className={`${Style.inputClass}`} placeholder='Message'></textarea>
                                            </div>
                                            <div className={`${Style.formGroup}float-left`}>
                                                <Btn>Submit</Btn>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{marginTop : '15vh'}}>
                        <Col md="6" ref={this.exp}>
                            <h2 className={`${Style.headerText}`}>
                                Experiences
                            </h2>
                            <div className={`${Style.listItemWrapper}`}>
                                <div className={`${Style.cardItem}`}>
                                    <div className={`${Style.separated}`}>
                                        <div className={`${Style.roundItem}`}>
                                           Now
                                        </div>
                                        <div className={`${Style.line}`}>
                                        </div>
                                    </div>
                                    <div className={`${Style.cardContent}`}>
                                    <div className={`${Style.cardTitle} mb-2`}>
                                        Fullstack Developer
                                        <span className={`${Style.subTitle}`}> Roots Indonesia </span>
                                    </div>
                                    <div className={`${Style.cardDescription}`}>
                                        Experienced frontend developer in the field of website and mobile application development. Mastering the Javascript programming language, especially for the React JS framework, React Native, Express JS and Laravel.collaborate with a team to build high standard and maintainable software
                                    </div>
                                    </div>
                                </div>
                                <div className={`${Style.cardItem}`}>
                                    <div className={`${Style.separated}`}>
                                        <div className={`${Style.roundItem}`}>
                                           2020
                                        </div>
                                    </div>
                                    <div className={`${Style.cardContent}`}>
                                    <div className={`${Style.cardTitle} mb-2`}>
                                        Web Developer <span className={`${Style.subTitle}`}> Dieng Cyber </span>
                                    </div>
                                    <div className={`${Style.cardDescription}`}>
                                        build and maintain websites on servers, websites built using laravel and CSS bootstrap
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="6">
                            <h2 className={`${Style.headerText}`}>
                                Education
                            </h2>
                            <div className={`${Style.listItemWrapper}`}>
                                <div className={`${Style.cardItem}`}>
                                    <div className={`${Style.separated}`}>
                                        <div className={`${Style.roundItem}`}>
                                           2020
                                        </div>
                                        <div className={`${Style.line}`}>
                                        </div>
                                    </div>
                                    <div className={`${Style.cardContent}`}>
                                    <div className={`${Style.cardTitle} mb-2`}>
                                        Arkademy 
                                        <span className={`${Style.subTitle}`}> Fullstack Developer </span>
                                    </div>
                                    <div className={`${Style.cardDescription}`}>
                                        learn full stack development using ExpressJS, React JS and React Native
                                    </div>
                                    </div>
                                </div>
                                <div className={`${Style.cardItem}`}>
                                    <div className={`${Style.separated}`}>
                                        <div className={`${Style.roundItem}`}>
                                           2017
                                        </div>
                                    </div>
                                    <div className={`${Style.cardContent}`}>
                                    <div className={`${Style.cardTitle} mb-2`}>
                                       Hight School
                                        <span className={`${Style.subTitle}`}>Software engineering</span>
                                    </div>
                                    <div className={`${Style.cardDescription}`}>
                                        Learn about basic programming such as C++, C#, etc. as well as learn the application development process
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default HomePage
