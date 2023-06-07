import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    
    constructor(){
        super();
        this.state = {
            articles :[],
            loading :false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=39e520d0b284431888430fae818e964a";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
    }

    render() {
        return (
            <div className='container mt-3'>
                <h2>NewsDaily-Top Headlines</h2>
                <div className="row mt-3 ">
                    {this.state.articles.map((element)=>{
                    return <div key={element.url} className="col-md-4 col-4">
                        <Newsitem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
