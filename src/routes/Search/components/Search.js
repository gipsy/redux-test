import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'
import ProgressBarProvider from 'react-redux-progress'
import {Form, FormGroup, Label, Input, Table } from 'reactstrap'

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

        console.log(endpoint)
        return (
            <div>
                <ProgressBarProvider
                    isActive={isLoading}
                    className="progress-bar"
                />
                <FormGroup tag="fieldset">
                    <legend>Choose Worldcup Terms</legend>
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

                { endpoint === 'matches_all' &&
                <div>
                    <h1>Matches All</h1>
                    <Table>
                        <thead>
                          <tr>
                            <th scope="row">match number</th>
                            <th scope="row">location</th>
                            <th scope="row">datetime</th>
                            <th scope="row">status</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item) => (
                                <tr key={uuidv1()}>
                                    <td>{item.match_number}</td>
                                    <td>{item.location}</td>
                                    <td>{item.datetime}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}

                { endpoint === 'matches_today' &&
                <div>
                    <h1>Matches Today</h1>
                    <Table>
                        <thead>
                          <tr>
                            <th scope="row">match number</th>
                            <th scope="row">location</th>
                            <th scope="row">datetime</th>
                            <th scope="row">status</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item) => (
                                <tr key={uuidv1()}>
                                    <td>{item.match_number}</td>
                                    <td>{item.location}</td>
                                    <td>{item.datetime}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}

                { endpoint === 'matches_current' &&
                <div>
                    <h1>Matches Current</h1>
                    <Table>
                        <thead>
                          <tr>
                            <th scope="row">match number</th>
                            <th scope="row">location</th>
                            <th scope="row">datetime</th>
                            <th scope="row">status</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item) => (
                                <tr key={uuidv1()}>
                                    <td>{item.match_number}</td>
                                    <td>{item.location}</td>
                                    <td>{item.datetime}</td>
                                    <td>{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}

                { endpoint === 'teams_result' &&
                <div>
                    <h1>Teams All</h1>
                    <Table>
                        <thead>
                          <tr>
                            <th scope="row">country</th>
                            <th scope="row">fifa code</th>
                            <th scope="row">group id</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item) => (
                                <tr key={uuidv1()}>
                                    <td>{item.country}</td>
                                    <td>{item.fifa_code}</td>
                                    <td>{item.group_id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}

                { endpoint === 'teams_group_result' &&
                <div>
                    <h1>Teams Group</h1>
                    <Table>
                        <thead>
                          <tr>
                            <th scope="row">team</th>
                            <th scope="row">country</th>
                            <th scope="row">fifa code</th>
                            <th scope="row">points</th>
                            <th scope="row">goal differential</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item) => (
                                <tr key={uuidv1()}>
                                    <td>{item.group}</td>
                                    {/* <th scope="row">{item.group}</th> */}
                                    {/* <th scope="row">{item.datetime}</th> */}
                                    {/* <th scope="row">{item.status}</th> */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}
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
