import {Component} from 'react'
import Header from '../Header/index'
import './index.css'

class HomeRoute extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="main-home-container">
          <h1 className="home-head">
            Find The Job That <br /> Fits Your Life
          </h1>
          <p className="home-para">
            Millions of people are searching for jobs, salary, information,
            company reviews. Find the job that fits your abilities and
            potential.
          </p>
          <button type="button" className="find-jobs-button">
            Find Jobs
          </button>
        </div>
      </div>
    )
  }
}

export default HomeRoute
