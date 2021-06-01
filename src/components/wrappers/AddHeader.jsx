import React from 'react';
import NavigationBar from '../navigation/NavigationBar';
import Header from '../headers/Header';

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