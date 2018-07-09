import React, {Component} from 'react';
import NewSingle from './NewSingle';


class News extends Component{

	constructor(props){
		super(props);
		this.state={
			new:[],
		};

	}

	componentDidMount(){
		const url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9a04d6a4329946489db074eba1994d36';
		fetch(url)
		.then((response)=>{
		return response.json();

		})
		
		.then((data)=> {
			this.setState({new:data.articles})
		})

		.catch((error)=>console.log(error));

	}

	renderItem(){
		return this.state.new.map((item2)=> (
			<NewSingle key={item2.url} item1={item2}/>
			
			
			));
	}


	render(){

		return(

			<div>
				 <h1 className="text-secondary"> Latest Feed</h1>
					<div className="row">
					
						{this.renderItem()}
					</div>
     
			</div>
			

			)
	       }
}

export default News;
