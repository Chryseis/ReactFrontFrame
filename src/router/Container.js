/**
 * Created by Administrator on 2017/11/9.
 */
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import HelloWorld from '../components/layouts/HelloWorld';

const store = configureStore();

class Container extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <Provider store={store}>
            <Router>
                <div className="app">
                    <HelloWorld/>
                </div>
            </Router>
        </Provider>
    }
}

export default Container;