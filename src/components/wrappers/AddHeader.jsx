import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Header from '../common/Header';

const AddHeader = (Component) => {
    return class App extends React.Component {

        render() {
            return (
                <>
                    <NavigationBar/>
                    <Header/>
                    <Component/>
                </>
            )
        }
    }
}

export default AddHeader;