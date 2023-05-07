import React, { Component } from 'react'
import Container from './Container';

export class Grid extends Component {
 
  constructor(){
    super();
    console.log("ello i am a consturctor");
    this.state={
      articles:[],
      loading:true
    }
  }
   async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=80913ae2258b4181bf48cfd7b29ffa04";
    let data = await fetch(url);
    let parseData=await data.json()
    this.setState({articles:parseData.articles})
  }
  render() {
    return (
        <div className='container my-3'>
      <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col md-4" key={element.url}>
        <Container title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}  imageUrl={element.urlToImage} url={element.url}/></div>
        
        
          

        
        })}
        
       </div>
        </div>
    )
  }
}

export default Grid