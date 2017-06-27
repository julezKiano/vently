import React, { Component} from 'react';
import { Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

//screens
import WelcomeScreen from './screens/Welcome';
import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';
import InterestsScreen from './screens/Interests';
import EventFeedScreen from './screens/Feed';
import SingleEventScreen from './screens/Single';

import TicketScreen from './screens/Tickets';
import ProfileScreen from './screens/Profile';
import SettingsScreen from './screens/Settings';
import MapScreen from './screens/Map';
import PayScreen from './screens/Pay';


const MainNavigator = TabNavigator({



        feed: { screen: StackNavigator({

            feed: { screen: EventFeedScreen, navigationOptions: {
                headerStyle: {
                    backgroundColor: '#FF6F00',
                },
            }},
            map: { screen: MapScreen, navigationOptions: {
                headerStyle: {
                    backgroundColor: '#FF6F00',
                },
            }},
            singleEvent: { screen: SingleEventScreen },
            pay: { screen: PayScreen, navigationOptions: {
                headerStyle: {
                    backgroundColor: '#FF6F00',
                },
            }},
        }, {
            cardStyle: {
                borderTopWidth: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
                borderColor: "#FF6F00"
            }
        })},

        tickets: { screen: TicketScreen },

        profile: { screen: ProfileScreen },

        settings: { screen: SettingsScreen },

    }, {
        navigationOptions: {
            tabBarVisible: true,
        },
        tabBarOptions: {
            activeTintColor: '#FF6F00',
            inactiveTintColor: '#e0e0e0',
            showLabel: false,
            labelStyle: {
                fontSize: 16,
            },
            style: {
                backgroundColor: 'white',
            },
            showIcon: true,
            indicatorStyle: {
                backgroundColor: '#FF6F00',
            }
        },
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,

});




// const MainNavigator = TabNavigator({
//
//     welcome: { screen: WelcomeScreen },
//
//     login: { screen: LoginScreen },
//
//     register: { screen: RegisterScreen },
//
//     interests: { screen: InterestsScreen },
//
//
//
//     mainApp: { screen: TabNavigator({
//
//
//
//
//
//
//
//
//
//
//
//
//         events: { screen: StackNavigator({
//             feed: { screen: EventFeedScreen, navigationOptions: {
//                 headerStyle: {
//                     backgroundColor: '#FF6F00',
//                 },
//                 statusBarStyle: 'light-content',
//             }},
//             singleEvent: { screen: SingleEventScreen }
//         }, {
//             cardStyle: {
//                 borderTopWidth: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
//                 borderColor: "#FF6F00"
//             }
//         })},
//
//         tickets: { screen: TicketScreen },
//
//         profile: { screen: ProfileScreen },
//
//         settings: { screen: SettingsScreen },
//
//
//
//
//
//     }, {
//         navigationOptions: {
//             tabBarVisible: true,
//         },
//         tabBarOptions: {
//             activeTintColor: '#FF6F00',
//             inactiveTintColor: '#e0e0e0',
//             showLabel: false,
//             labelStyle: {
//                 fontSize: 16,
//             },
//             style: {
//                 backgroundColor: 'white',
//             },
//             showIcon: true,
//             indicatorStyle: {
//                 backgroundColor: '#FF6F00',
//             }
//         },
//         tabBarPosition: 'bottom',
//         swipeEnabled: true,
//         animationEnabled: true,
//
//     })},
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// }, {
//     navigationOptions: {
//         tabBarVisible: false
//     },
//     swipeEnabled: false,
//     animationEnabled: false,
// });





export default MainNavigator;
