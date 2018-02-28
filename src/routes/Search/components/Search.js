import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'
import ProgressBarProvider from 'react-redux-progress'
import {Form, FormGroup, Label, Input } from 'reactstrap'

class Search extends Component {

    componentDidMount() {
        this.props.fetchData(this.props.endpoint)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.endpoint !== this.props.endpoint) {
          this.props.fetchData(this.props.endpoint)
        }
    }

    handleEndpointUpdate(evt) {
        this.props.endpointUpdate(evt.target.value)
    }

    render() {
        const { isLoading, hasErrored, endpoint } = this.props

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
                            checked={endpoint === 'matches_all'}
                            onChange={(evt) => this.handleEndpointUpdate(evt)}
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
                              checked={endpoint === 'matches_today'}
                              onChange={(evt) => this.handleEndpointUpdate(evt)}
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
                              checked={endpoint === 'matches_current'}
                              onChange={(evt) => this.handleEndpointUpdate(evt)}
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
                              checked={endpoint === 'teams_result'}
                              onChange={(evt) => this.handleEndpointUpdate(evt)}
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
                              checked={endpoint === 'teams_group_result'}
                              onChange={(evt) => this.handleEndpointUpdate(evt)}
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

Search.propTypes = {
    fetchData: PropTypes.func.isRequired,
    endpointUpdate: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    endpoint: PropTypes.string.isRequired,
    hasErrored: PropTypes.bool.isRequired,
}

export default Search
