import { render } from "enzyme"
import React from 'react'

const MovieReviews = () => {

  const listMovies = () => {
    console.log(this.props.reviewdata)
    return this.props.reviewdata.map(review => <li className='review'> {review} </li>)
  }

 return(
      <div className='review-list'>
        <ul>
          {this.listMovies}
        </ul>
      </div>
    )
}

export default MovieReviews