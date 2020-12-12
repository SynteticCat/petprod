import React, { Component } from 'react';
import EventDetails from './EventDetails/EventDetails';
import { getEventDetails } from "../services/api.service.js"

class EventDetailsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {
                event: {
                    id: 0,
                    time: 0,
                    cardId: 0,
                    isCrime: false,
                    urlPhoto: ""
                },
                owner: {
                    id: 0,
                    fullName: "ERROR",
                    urlAvatar: "",
                    cards: [],
                    category: ""
                },
                user: {
                    isDefined: false,
                    isOwner: true
                }
            }
        };
    }

    // TODO: Error!
    // async componentDidMount() {
    //     this.props.match.params.eventId = new Number(this.props.match.params.eventId);
    //     await getEventDetails(this.props.match.params.eventId).then((returnedInfo) => { this.setState({ info: returnedInfo }) }).catch((error) => { console.log("1: " + error) });
    // }
    
    render() {
        console.log(this.props.match.params.eventId)
        return (<EventDetails event={this.state.info.event} user={this.state.info.user} owner={this.state.info.owner} />)
    };
}

export default EventDetailsPage;