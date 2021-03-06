import { Platform } from 'react-native';
const config = {
    currentIp: '192.168.1.100',
    getPrefix() {
        if(Platform.OS==='ios') {
            return 'http://localhost:3000';
        }
        return `http://${this.currentIp}:3000`;
    },
    getAuthUrl() {
        return `${this.getPrefix()}/api/users/authenticate`;
    },
    getInterestsUrl() {
        return `${this.getPrefix()}/api/interests`;
    },
    getInterestsUpdateUrl() {
        return `${this.getPrefix()}/api/users/interests`;
    },
    getEventsUrl() {
        return `${this.getPrefix()}/api/events`;
    },
    getSingleEventUrl(id, coords = null) {
        return ( coords ) ? `${this.getPrefix()}/api/events/${id}?lat=${coords.latitude}&lng=${coords.longitude}` : `${this.getPrefix()}/api/events/${id}`;
    },
    getTicketsUrl() {
        return `${this.getPrefix()}/api/users/tickets`
    },
    getSingleTicketUrl(id) {
        return `${this.getPrefix()}/api/tickets/${id}`
    },
    getTicketShareUrl() {
        return `${this.getPrefix()}/api/tickets/`
    },
    getPlaceOrderUrl() {
        return `${this.getPrefix()}/api/pay`
    },
    getProfileUrl() {
        return `${this.getPrefix()}/api/users`
    },
    getEventsNearMeUrl(coords) {
        return `${this.getPrefix()}/api/events?lat=${coords.latitude}&lng=${coords.longitude}`;
    }
}


export default config;
