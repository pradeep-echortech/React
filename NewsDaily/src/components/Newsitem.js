import React from 'react'

const Newsitem = (props) => {
    let { title, description, imageUrl, newsUrl, date, source } = props;
    return (
        <div className="card mx-auto my-2" >
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>{source}</span>
            <img src={imageUrl ? imageUrl : "https://www.hindustantimes.com/ht-img/img/2023/06/06/1600x900/cyclone_1686043751255_1686043755133.png"} className="card-img-top" alt="NoImage-available" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">Published on : {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
    )

}

export default Newsitem
