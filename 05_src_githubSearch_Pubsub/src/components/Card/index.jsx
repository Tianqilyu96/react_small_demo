import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const {avatar,html,login} = this.props
        return (
            <div className="card">
          <a href={html} target="_blank" rel="noreferrer">
            <img
              src={avatar}
              style={{ width: "100px" }}
              alt="Profile pic"
            />
          </a>
          <p className="card-text">{login}</p>
        </div>
        )
    }
}
