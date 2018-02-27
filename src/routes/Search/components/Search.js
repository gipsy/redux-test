import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'
import ProgressBarProvider from 'react-redux-progress'
import { endpointUpdate } from '../modules/search'
import {Form, FormGroup, Label, Input } from 'reactstrap'

class SearchResults extends Component {
    constructor(props) {
      super(props);
      this.state = { endpoint: this.props.endpoint };
      console.log(this.props)
    }

    componentDidMount() {
        this.props.fetchData(this.state.endpoint)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.endpoint !== this.props.endpoint) {
        }
    }

    handleChange(endpoint) {
      this.setState({endpoint})
      this.props.endpointState(this.state.endpoint)
    }

    render() {
        const { isLoading, hasErrored, endpoint } = this.props
        console.log(this.props)

        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>
        }

        return (
            <div>
                <ProgressBarProvider
                    isActive={isLoading}
                    className="progress-bar"
                />
                <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <FormGroup check>
                        <Label check>
                          <Input
                            type="radio"
                            name="endpoint"
                            value="matches_all"
                            checked={this.state.endpoint === 'matches_all'}
                            onChange={(value) => this.handleChange(value)}
                          />{' '}
                          All matches
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                              type="radio"
                              name="endpoint"
                              value="matches_today"
                              checked={this.state.endpoint === 'matches_today'}
                              onChange={(value) => this.handleChange(value)}
                            />{' '}
                              Today's matches
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                              type="radio"
                              name="endpoint"
                              value="matches_current"
                              checked={this.state.endpoint === 'matches_current'}
                              onChange={(value) => this.handleChange(value)}
                            />{' '}
                            Current matches
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                              type="radio"
                              name="endpoint"
                              value="teams_result"
                              checked={this.state.endpoint === 'teams_result'}
                              onChange={(value) => this.handleChange(value)}
                            />{' '}
                            Teams Results
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input
                              type="radio"
                              name="endpoint"
                              value="teams_group_result"
                              checked={this.state.endpoint === 'teams_group_result'}
                              onChange={(value) => this.handleChange(value)}
                            />{' '}
                            Teams Group Result
                        </Label>
                    </FormGroup>
                </FormGroup>
                <ul>
                    {this.props.items.map((item) => (
                        <li key={uuidv1()}>
                            {item.home_team.country}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

SearchResults.propTypes = {
    fetchData: PropTypes.func.isRequired,
    endpointState: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    endpoint: PropTypes.string.isRequired,
    hasErrored: PropTypes.bool.isRequired,
}

export default SearchResults
