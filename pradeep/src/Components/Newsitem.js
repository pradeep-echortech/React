import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description , imageUrl ,newsUrl } = this.props
        return (
            <div class="card mx-auto my-1" style={{ width: "18rem" }}>
                <img src={imageUrl?imageUrl:"https://www.hindustantimes.com/ht-img/img/2023/06/06/1600x900/cyclone_1686043751255_1686043755133.png"} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}...</h5>
                    <p class="card-text">{description}...</p>
                    <a href={newsUrl} target="_blank" rel='noreferrer' class="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        )
    }
}

export default Newsitem
