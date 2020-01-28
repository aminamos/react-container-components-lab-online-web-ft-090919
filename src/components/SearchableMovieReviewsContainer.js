import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  searchForReviews = query => {
    fetch(`${URL}&query=${query}`)
    .then(res => res.json())
    .then(obj => {
      let arr = []
      for (let i = 0; i < obj.length; i++) {
        arr.push(obj[i].results)
      }
      this.setState({
        reviews: arr
      })
    })
  }

  onChangeQuery = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault()
    this.searchForReviews(this.state.searchTerm)
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.submitHandler}>
          <input type='text' onChange={this.onChangeQuery}/>
          <button type='submit'>Search for reviews</button>
        </form>
        <MovieReviews reviewdata={this.state.reviews}/>
      </div>
    )
  }
}