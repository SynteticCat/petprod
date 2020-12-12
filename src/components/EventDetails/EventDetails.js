import React, { Component } from 'react';
import { Divider } from '@material-ui/core';
import "./EventDetails.css"
import UserDetails from "./UserDetails/UserDetails"

/*
const props2 =  {
    event: {
        id: 123123,
        time: 1607714162000,
        cardId: 1,
        isCrime: true,
        urlPhoto: "https://vignette.wikia.nocookie.net/james-camerons-avatar/images/4/4c/%D0%9D%D0%B5%D0%B9%D1%82%D0%B8%D1%80%D0%B8._%D0%98%D0%BD%D1%84%D0%BE%D0%B1%D0%BE%D0%BA%D1%81.jpg/revision/latest/scale-to-width-down/340?cb=20180213033424&path-prefix=ru"
},
owner: {
    id: 3,
    fullName: "Петр Петров Петровский",
    urlAvatar: "https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2",
    cards: [1, 2, 13],
    category: "Охранник"
},
        user: {
            isDefined: true,
            isOwner: false,
            owner: {
                id: 1,
                fullName: "Мария Ивановна Иванова",
                urlAvatar: "https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg",
                cards: [10],
                category: "Посетитель"
            }
        }
}
*/

class EventDetails extends Component {
    isTrue(isRecognized) {
        let a;
        if (isRecognized) {
            a = <text style={{ color: "green" }}>Да</text>
        }
        else {
            a = <text style={{ color: "red" }}>Нет</text>
        }
        return a
    }

    render() {
        return (
            <div className="additionalInfo">

                <text class="titleSubinfo"> Событие </text>
                <Divider class="divider-ui" />
                <div class="eventInfo">
                    <text>Распознан: {this.isTrue(this.props.user.isDefined)}</text>
                    <text>Владелец: {this.isTrue(this.props.user.isOwner)}</text>
                    <div class="mainEventInfo">
                        <div class="mainEventImageInfo">
                            <img src={this.props.event.urlPhoto} alt="Event image" />
                        </div>
                        <div class="mainEventTextInfo">
                            <text>Нарушение: {this.isTrue(this.props.event.isCrime)}</text>
                            <text>Использованная карта: {this.props.event.cardId}</text>
                            <text>Фото сделано: {new Date(this.props.event.time).toLocaleString("ru")}</text>
                        </div>
                    </div>
                </div>

                <text class="titleSubinfo"> Распознаный </text>
                <Divider class="divider-ui" />
                {this.props.user.isOwner ? <UserDetails user={this.props.owner} /> : <UserDetails user={this.props.user.owner} />}

                <text class="titleSubinfo"> Владелец </text>
                <Divider class="divider-ui" />
                <UserDetails user={this.props.owner} />
            </div>
        )
    }
}

export default EventDetails;