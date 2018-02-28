import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'
import ProgressBarProvider from 'react-redux-progress'
import {Form, FormGroup, Label, Input } from 'reactstrap'

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = { endpoint: this.props.endpoint };
    }

    componentDidMount() {
        this.props.fetchData(this.state.endpoint)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.endpoint !== this.props.endpoint) {
        }
    }

    handleEndpointChange(endpoint) {
      // this.setState({endpoint})
      this.props.endpointState(this.state.endpoint)
    }

    render() {
        const { isLoading, hasErrored, endpoint } = this.props
        console.log(endpoint)
        console.log(isLoading)

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
                            onChange={(value) => this.handleEndpointChange(value)}
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
                              onChange={(value) => this.handleEndpointChange(value)}
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
                              onChange={(value) => this.handleEndpointChange(value)}
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
                              onChange={(value) => this.handleEndpointChange(value)}
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
                              onChange={(value) => this.handleEndpointChange(value)}
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
    endpointState: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    endpoint: PropTypes.string.isRequired,
    hasErrored: PropTypes.bool.isRequired,
}

export default Search
