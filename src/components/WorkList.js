import React, { Component }from 'react'
import '../css/WorkList.css';

class WorkList extends Component {
    constructor(props) {
        super(props);
        this.data = [
            {
                id: 1,
                name: 'work1',
                img: 'https://static1.squarespace.com/static/5a9b936f36099bb6a695f4f1/t/5a9b93df9140b7602d8bb7d8/1456778711357/65.jpg',
                info: {}
            },
            {
                id: 2,
                name: 'work2',
                img: 'https://static1.squarespace.com/static/5a9b936f36099bb6a695f4f1/t/5a9b93df9140b7602d8bb7d8/1456778711357/65.jpg',
                info: {}
            },
            {
                id: 3,
                name: 'work3',
                img: 'https://static1.squarespace.com/static/5a9b936f36099bb6a695f4f1/t/5a9b93df9140b7602d8bb7d8/1456778711357/65.jpg',
                info: {}
            },
            {
                id: 4,
                name: 'work4',
                img: 'https://static1.squarespace.com/static/5a9b936f36099bb6a695f4f1/t/5a9b93df9140b7602d8bb7d8/1456778711357/65.jpg',
                info: {}
            },
        ];
        this.state = {
            detailShow: false,
            data: null,
            index: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.backToList = this.backToList.bind(this);
        this.goNext = this.goNext.bind(this);
    }
    //点击列表项
    handleClick(data, index) {
        this.setState({
            detailShow: true,
            data,
            index
        });
    }
    //点击返回按钮
    backToList() {
        this.setState({
            detailShow: false,
            data: null
        });
    }

    goNext(index) {
        if(index < this.data.length - 1) {
            this.setState({
                index: index + 1,
                data: this.data[index + 1]
            });
        }

    }


    render() {
        const workList = this.data.map((work,i) =>
            <WorkItem data={work} key={work.id} onClickItem={this.handleClick} index={i}/>
        );
        let workDetail = null;
        if(this.state.detailShow) {
            workDetail =  <WorkDetail data={this.state.data}
                                      onBack={this.backToList}
                                      index={this.state.index}
                                      onNext={this.goNext}/>;
        }
        return (
            <div>
                {workDetail}
                <div className="work-list clearfix">
                    {workList}
                </div>
            </div>

        )
    }
}

class WorkItem extends Component{
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.props.onClickItem(this.props.data, this.props.index);
    }

    render() {
        return(
            <div className="work-item" onClick={this.clickHandler}>
                <div className="img-wrap">
                    <div className="img-box">
                        <img src={this.props.data.img} alt={this.props.data.name}/>
                    </div>
                </div>

                <div className="work-name">{this.props.data.name}</div>
            </div>
        )
    }
}

class WorkDetail extends Component {
    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
    }
    back() {
        this.props.onBack();
    }
    next() {
        this.props.onNext(this.props.index);
    }
    render() {
        return (
            <div className="work-detail">
                {this.props.data.name}
                <button onClick={this.back}>back</button>
                <button onClick={this.next}>next</button>
            </div>
        )
    }
}

export default WorkList;