import React, { Component }from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css';

class Header extends Component {
    render() {
        return(
            <div className="header clearfix">
                <Title title="CRQX" subTitle="works"/>
                <LinkGroup/>
            </div>
        )
    }
}

const Title = (props) => {
    return(
        <div className="header-title">
            <div className="title">{props.title}</div>
            <div className="sub-title">{props.subTitle}</div>
        </div>
    )
};


class LinkGroup extends Component {
    constructor(props) {
        super(props);
        this.data = [
            {
                id: 1,
                name: 'photo',
                url:'/a'
            },
            {
                id: 2,
                name: 'video',
                url:'/b'
            },
            {
                id: 3,
                name: 'installation',
                url:''
            },
            {
                id: 4,
                name: 'book',
                url:''
            }
        ];

        this.state = {
            showDropDown: false
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    show() {
        this.setState({
            showDropDown: true
        });
    }

    hide() {
        this.setState({
            showDropDown: false
        });
    }

    render() {
        let list = null;
        if(this.state.showDropDown) {
             list = this.data.map((item) =>
                <div className="panel-item" key={item.id}>
                    {item.name}
                </div>
            );
        }

        return(
            <ul className="link-group">
                <li className="link-item" onMouseEnter={this.show} onMouseLeave={this.hide}>
                    <Link to="/">work</Link>
                    <div className="panel">
                        {list}
                    </div>
                </li>
                <li className="link-item"><Link to="/blog">blog</Link></li>
                <li className="link-item"><Link to="/about">about</Link></li>
            </ul>
        )
    }
}

export default Header;