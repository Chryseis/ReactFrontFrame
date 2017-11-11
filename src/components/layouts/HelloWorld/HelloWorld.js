/**
 * Created by Administrator on 2017/11/9.
 */
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as DemoAcitonCreator from '../../../actions/demo';
import './helloWorld.less';

@connect(state => ({
    demo: state.demo
}), dispatch => ({
    actions: bindActionCreators(DemoAcitonCreator, dispatch)
}))
class HelloWorld extends React.Component {
    render() {
        const {demo, actions} = this.props;
        return <div>
            <h1 onClick={actions.getHaha}>{demo.test}<a href="javascript:void(0)" onClick={(e) => {
                e.stopPropagation();
                actions.getHehe();
            }}>click</a></h1>
            <div className="avatar"></div>
        </div>
    }
}


export default HelloWorld;