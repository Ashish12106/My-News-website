import React, { Component } from 'react'
import Newsitem from './Newsitem'
import { Spinner } from './Spinner';

export class News extends Component {
    

    
    constructor(props)
    {
        super(props);
        this.state={
         articles:[],
         loading:false,
         page:1
        }
        document.title=`Daily Buggel News - ${this.props.catgory}`
        
    }

 async componentDidMount()
 {
     let url = this.props.newurl+'&page=1&pageSize=20';
     this.setState({loading:true});
     let data = await fetch(url);
     let parsedData = await data.json();
     this.setState({articles:parsedData.articles,
        totalres:parsedData.totalResults,
        loading:false
    });
 }

 previous= async ()=>{
    let url = this.props.newurl+`&page=${this.state.page-1}&pageSize=20`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles,
    page:this.state.page-1,
    loading:false
    });

 }
 next= async ()=>{
     let url = this.props.newurl+`&page=${this.state.page+1}&pageSize=20`;
    // console.log(url)
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles:parsedData.articles,
    page:this.state.page+1,
    loading:false
    });

}

    render() {

        return (
            <div className="my-4">
            <div className="container ">
                <h1 className="container text-center my-3">Daily Buggel - {this.props.title} </h1>
               {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((elements)=>{
                         return <div className="col-md-4" key={elements.url}>
                            <Newsitem title={elements.title?elements.title:""}  description = {elements.description?elements.description.slice(0,70):""} imgurl={elements.urlToImage} newsurl={elements.url} source={elements.source["name"]}/>
                          </div> 
                        
                    })}
                 
                  
                </div>
           </div>
           <div className="container d-flex justify-content-end">
           <button disabled ={this.state.page<=1} type="button" className="btn btn-outline-primary btn-lg mx-5 " onClick={this.previous}> &larr; Previous</button>
           <button disabled={this.state.page + 1 > Math.ceil(this.state.totalres/20)} type="button" className="btn btn-outline-success btn-lg mx-5 px-6" onClick={this.next}>Next  &rarr;</button>
           </div>
           </div>
        
        )
    }
}

export default News
