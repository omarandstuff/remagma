import React, { Component } from 'react'
import './Pager.css'

export default class Pager extends Component {
  state = {
    page: 1,
    previousDisabled: true,
    nextDisabled: true
  }

  componentWillReceiveProps(nextProps) {
    const nextDisabled = nextProps.total === this.state.page

    this.setState({ nextDisabled })
  }

  goToPreviousPage = () => {
    const page = this.state.page - 1

    this.goToPage(page)
  }

  goToNextPage = () => {
    const page = this.state.page + 1

    this.goToPage(page)
  }

  goToPage = (page) => {
    const previousDisabled = page === 1
    const nextDisabled = this.props.pages === page

    this.setState({ page, previousDisabled, nextDisabled })

    if(this.props.onChange) {
      this.props.onChange(page)
    }
  }

  render() {
    return (
      <div className="pager">
        <button
          disabled={this.state.previousDisabled}
          onClick={this.goToPreviousPage}
        >
          Previous
        </button>
        {this.state.page}/{this.props.total}
        <button
          disabled={this.state.nextDisabled}
          onClick={this.goToNextPage}
        >
          Next
        </button>
      </div>
    )
  }
}
