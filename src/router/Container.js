/**
 * Created by Administrator on 2017/11/9.
 */
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../store/configureStore';
import HelloWorld from '../components/layouts/HelloWorld';

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