import React, {Component} from 'react';
import Table from './components/Table/Table';
import Actions from './components/Actions/Actions';
import Sidenav from './components/Sidenav/Sidenav';




class App extends Component {
render() {
    return (
        <>
        <div className="container-fluid">
            <Table />
        </div>
        <div className="container-fluid">
            <Actions />
        </div> 
        <div>
            <Sidenav />
        </div>
        </>
        )
    }
}

export default App