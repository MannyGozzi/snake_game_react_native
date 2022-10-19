import { registerRootComponent } from 'expo';
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import {GameEngine} from 'react-native-game-engine'
import Constants from './Constants';
import Head from './Head';
import {GameLoop} from './GameLoop'
export default class Snake extends Component {
    constructor(props) {
        super(props);
        this.boardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
        this.engine = null;
    }

    render() {
        return (
            <View style={styles.container}>
                <GameEngine
                    ref={(ref) => { this.engine = ref }}
                    style={{ width: this.boardSize, height: this.boardSize, flex: null, backgroundColor: '#ffffff' }}
                    systems={[GameLoop]}
                    entities={{
                        head: { position: [0, 0], size: Constants.CELL_SIZE, renderer: <Head /> }
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    }
});


// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(appName, () => Snake);
