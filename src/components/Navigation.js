import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import "./navigation.css";
import resume from '../images/Marc_Diaz_Resume.pdf'
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Scrollchor from 'react-scrollchor';
import Collapse from '@material-ui/core/Collapse';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasScrolledDown: false,
            isOpen: false,
        }
        this.handleScroll = this.handleScroll.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.handleCloseCollapse = this.handleCloseCollapse.bind(this);
    }

    handleScroll() {
        const bodyScrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        let scrolledDownEnough = bodyScrollTop > 50 ? true : false;
        this.setState({
          hasScrolledDown: scrolledDownEnough
        });
    }

    toggleNavbar() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    handleCloseCollapse() {
        if (this.state.isOpen) {
          this.setState({
            isOpen: !this.state.isOpen
          });
        }
      }

    componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        const navbarstyle = this.state.hasScrolledDown ? "header-color-scroll nav-bar" : "header-color nav-bar";
        const fontColor = this.state.hasScrolledDown ? "blue-font nav-bar" : "white-font nav-bar";
        return (
        <div className = "nav-root">
            <AppBar position = "fixed"  className={navbarstyle}>
            <Toolbar>
                <Typography variant="h6" className="name-title" noWrap>
                    <Scrollchor to="#front-page" animate={{duration: 500}} className={fontColor}>
                        <h3>Marc Diaz</h3>
                    </Scrollchor>
                </Typography>
                <div className="mobile-navbar">
                  <Button onClick={this.toggleNavbar}>
                    <MenuIcon className={fontColor} id="mobile-menuicon"/>
                  </Button>
                </div>
                <div className="normal-navbar">
                  <Button color="inherit"><Scrollchor to="#about-me" animate={{duration: 350}} className={fontColor}>About Me</Scrollchor></Button>
                  <Button color="inherit"><Scrollchor to="#projects" animate={{duration: 500}} className={fontColor}>Projects</Scrollchor></Button>
                  <Button color="inherit"><a href={resume} download className={fontColor}>Resume</a></Button>
                  <Button color="inherit"><Scrollchor to="#contact" animate={{duration: 1000}} className={fontColor}>Contact</Scrollchor></Button>
                </div>
            </Toolbar>
            <Collapse in={this.state.isOpen} className="the-collapse" unmountOnExit>
                <Scrollchor to="#about-me" animate={{duration: 350}} className={fontColor}>
                  <div className="row collapse-row" onClick={this.handleCloseCollapse}>
                    <div>
                      About Me
                    </div>
                  </div>
                </Scrollchor>
                <Scrollchor to="#projects" animate={{duration: 500}} className={fontColor}>
                  <div className="row collapse-row" onClick={this.handleCloseCollapse}>
                    <div>
                      Projects
                    </div>
                  </div>
                </Scrollchor>
                <a href={resume} download className={fontColor}>
                  <div className="row collapse-row" onClick={this.handleCloseCollapse}>
                    <div>
                      Resume
                    </div>
                  </div>
                </a>
                <Scrollchor to="#contact" animate={{duration: 1000}} className={fontColor}>
                  <div className="row collapse-row" onClick={this.handleCloseCollapse}>
                    <div>
                      Contact
                    </div>
                  </div>  
                </Scrollchor>
            </Collapse>
            </AppBar>
        </div>
        )
    }
}
export default Navigation;