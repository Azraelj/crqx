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
                info: {
                    title: 'work1',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet at autem doloremque et, facere illo laudantium, maxime sit tempora vero vitae voluptas? Autem, facilis libero ratione reprehenderit sunt vitae!',
                    pics: ['https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4b1ed859fd0a688519c03/56d4b2ad45bf21a630f1f0aa/1456780038991/?format=1000w','https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4b1ed859fd0a688519c03/56d4b2ad45bf21a630f1f0aa/1456780038991/?format=1000w','https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4b1ed859fd0a688519c03/56d4b2ad45bf21a630f1f0aa/1456780038991/?format=1000w']
                }
            },
            {
                id: 2,
                name: 'work2',
                img: 'https://static1.squarespace.com/static/5a9b936f36099bb6a695f4f1/t/5a9b93df9140b7602d8bb7d8/1456778711357/65.jpg',
                info: {
                    title: 'work2',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet at autem doloremque et, facere illo laudantium, maxime sit tempora vero vitae voluptas? Autem, facilis libero ratione reprehenderit sunt vitae!',
                    pics: ['https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4a6fbf699bba7a12bd0fe/56d4a73b20c6470d703c3948/1456777033566/?format=1000w','https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4a6fbf699bba7a12bd0fe/56d4a73b20c6470d703c3948/1456777033566/?format=1000w','https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4a6fbf699bba7a12bd0fe/56d4a73b20c6470d703c3948/1456777033566/?format=1000w']
                }
            },
            {
                id: 3,
                name: 'work3',
                img: 'https://static1.squarespace.com/static/5a9b936f36099bb6a695f4f1/t/5a9b93df9140b7602d8bb7d8/1456778711357/65.jpg',
                info: {
                    title: 'work3',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet at autem doloremque et, facere illo laudantium, maxime sit tempora vero vitae voluptas? Autem, facilis libero ratione reprehenderit sunt vitae!',
                    pics: ['https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4a6fbf699bba7a12bd0fe/56d4a7bb746fb9758d44c27e/1456777159794/?format=1000w','https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4a6fbf699bba7a12bd0fe/56d4a7bb746fb9758d44c27e/1456777159794/?format=1000w','https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4a6fbf699bba7a12bd0fe/56d4a7bb746fb9758d44c27e/1456777159794/?format=1000w']
                }
            },
            {
                id: 4,
                name: 'work4',
                img: 'https://static1.squarespace.com/static/5a9b936f36099bb6a695f4f1/t/5a9b93df9140b7602d8bb7d8/1456778711357/65.jpg',
                info: {
                    title: 'work4',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet at autem doloremque et, facere illo laudantium, maxime sit tempora vero vitae voluptas? Autem, facilis libero ratione reprehenderit sunt vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet at autem doloremque et, facere illo laudantium, maxime sit tempora vero vitae voluptas? Autem, facilis libero ratione reprehenderit sunt vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, amet at autem doloremque et, facere illo laudantium, maxime sit tempora vero vitae voluptas? Autem, facilis libero ratione reprehenderit sunt vitae!',
                    pics: ['https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4aae022482e42c20a8bc0/56d4abe48259b57a201fc909/1456778220299/?format=1000w','https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4aae022482e42c20a8bc0/56d4abe48259b57a201fc909/1456778220299/?format=1000w','https://static1.squarespace.com/static/56d4a125e707eb7a02e4055f/56d4aae022482e42c20a8bc0/56d4abe48259b57a201fc909/1456778220299/?format=1000w']
                }
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

    goNext(index, dir) {
        if(dir > 0) {
            if(index < this.data.length - 1) {
                this.setState({
                    index: index + 1,
                    data: this.data[index + 1]
                });
            }
        }else {
            if(index > 0) {
                this.setState({
                    index: index - 1,
                    data: this.data[index - 1]
                });
            }
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
        this.prev = this.next.bind(this, -1);
        this.next = this.next.bind(this, 1);
    }
    back() {
        this.props.onBack();
    }
    next(dir) {
        this.props.onNext(this.props.index, dir);
    }
    render() {
        const work = this.props.data.info;
        const picList = work.pics.map((pic, i) =>
            <div className="pic" key={i}>
                <img src={pic} alt={pic}/>
            </div>
        );
        return (
            <div>
                <div className="work-detail clearfix">
                    <div className="pics">
                        {picList}
                    </div>
                    <div className="text">
                        <div className="title">{work.title}</div>
                        <div className="content">
                            {work.content}
                        </div>
                    </div>

                </div>
                <div className="button-group">
                    <button className="back" onClick={this.back}>back</button>
                    <div className="change">
                        <button onClick={this.prev}>prev</button>
                        /
                        <button onClick={this.next}>next</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkList;