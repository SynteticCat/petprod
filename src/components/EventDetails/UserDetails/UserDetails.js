import React, { Component } from 'react';
import "./UserDetails.css"

class UserDetails extends Component {
    render() {
        return (
            <div class="userInfo">
                <div class="userInfoImage">
                    <img src={this.props.user.urlAvatar} alt="User image" />
                </div>
                <div class="userInfoText">
                    <text>ID: {this.props.user.id}</text>
                    <text>ФИО: {this.props.user.fullName}</text>
                    <text>Категория допуска: {this.props.user.category}</text>
                    <text class="cards">Карты: {this.props.user.cards.toString()}</text>
                </div>
            </div>
        )
    }
}

export default UserDetails;