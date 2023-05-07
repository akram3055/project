import React, { Component } from 'react'

export class containers extends Component {
  render() {
    let {title,description,price,imageUrl,url}=this.props
    return (
      <div><div className="card" style={{width: "18rem"}}>
      <img src={imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <h5 className="card-title-1">{price}</h5>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div></div>
    )
  }
}

export default containers