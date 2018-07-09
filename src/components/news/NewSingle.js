import React, {Component} from 'react';

const NewSingle = ({item1})=>(


		<div className="col-sm-6 col-md-3">
			<div className="card">
				<img className="card-img-top" src={item1.urlToImage} alt={item1.title}/>
				<div className="card-body">
					<h5 className="card-title">{item1.source.name} </h5>
					<p className="card-text">{item1.title}</p>
					<a href={item1.url} target="_blank">Full Article</a>

				</div>

			</div>

		</div>

	)

export default NewSingle;
