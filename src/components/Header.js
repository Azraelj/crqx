import React, { Component }from 'react'
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
                name: 'work',
                url:''
            },
            {
                id: 2,
                name: 'blog',
                url:''
            },
            {
                id: 3,
                name: 'about',
                url:''
            }
        ];
    }
    render() {
        const list = this.data.map((link) =>
            <li className="link-item" key={link.id}>{link.name}</li>
        );
        return(
            <ul className="link-group">
                {list}
            </ul>
        )
    }
}

export default Header;