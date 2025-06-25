import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title,description,imgurl,newsurl}= this.props;
    return (
      <div className='my-3'>
        
        <div className="card" style={{width: "18rem;"}}>
            <img src={!imgurl? "https://imgs.search.brave.com/Hw5dkcrqboJ-RIsKsLymxoqEt_uDr3DyismTGmSD_Gg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzY1LzIyLzQx/LzM2MF9GXzU2NTIy/NDE4MF9RTlJpUlFr/ZjlGdzBkS1JvWkd3/VWtubW1mazUxU3VT/Uy5qcGc": imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} target="_blank" className="btn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
