import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'
import * as moment from 'moment'
import ProgressBarProvider from 'react-redux-progress'
import {Form, FormGroup, Label, Input, Table } from 'reactstrap'
import './Search.scss'

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

    handleCountryUpdate(evt) {
        this.props.countryUpdate(evt.target.value)
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
                    <legend>Choose Worldcup Terms</legend>
                    <FormGroup check>
                        <Label check>
                          <Input
                            type="radio"
                            name="endpoint"
                            value="matches"
                            checked={endpoint === "matches"}
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
                              value="matches/today"
                              checked={endpoint === 'matches/today'}
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
                              value="matches/current"
                              checked={endpoint === 'matches/current'}
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
                              value="teams"
                              checked={endpoint === 'teams'}
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
                              value="group_results"
                              checked={endpoint === 'group_results'}
                              onChange={(evt) => this.handleEndpointUpdate(evt)}
                            />{' '}
                            Teams Group Result
                        </Label>
                    </FormGroup>

                    <FormGroup check>
                        <Label check>
                            <Input
                              type="select"
                              name="fifa_code"
                              defaultValue={'All countries'}
                              onChange={(evt) => this.handleCountryUpdate(evt)}
                            >
                              <option>All countries</option>
                              <option value="USA">USA</option>
                              <option value="CAN">Canada</option>
                              <option value="MEX">Mexico</option>
                              <option value="CRC">Costa Rica</option>
                              <option value="COL">Colombia</option>
                              <option value="ECU">Ecuador</option>
                              <option value="BRA">Brazil</option>
                              <option value="ENG">England</option>
                              <option value="FRA">France</option>
                              <option value="ESP">Spain</option>
                              <option value="NOR">Norway</option>
                              <option value="SWE">Sweden</option>
                              <option value="NED">Netherlands</option>
                              <option value="CMR">Cameroon</option>
                              <option value="CIV">Côte d'Ivoire</option>
                              <option value="JPN">Japan</option>
                              <option value="SUI">Switzerland</option>
                              <option value="NGA">Nigeria</option>
                              <option value="GER">Germany</option>
                              <option value="KOR">Korea</option>
                              <option value="CHN">China</option>
                              <option value="THA">Thailand</option>
                              <option value="NZL">New Zealand</option>
                              <option value="AUS">Australia</option>
                            </Input>
                        </Label>
                    </FormGroup>
                </FormGroup>

                { endpoint === 'matches' &&
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
                                    <td>{item.match_number || '—'}</td>
                                    <td>{item.location || '—'}</td>
                                    <td>{moment(item.datetime).format("LLLL") || '—'}</td>
                                    <td>{item.status || '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}

                { endpoint === 'matches/today' &&
                <div>
                    { !!this.props.items.length
                    ?
                    <h1>Matches Today</h1>
                    :
                    <p className="search__no-matches">There is no Matches today</p>
                    }
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
                                    <td>{item.match_number || '—'}</td>
                                    <td>{item.location || '—'}</td>
                                    <td>{moment(item.datetime).format("LLLL") || '—'}</td>
                                    <td>{item.status || '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}

                { endpoint === 'matches/current' &&
                <div>
                    { !!this.props.items.length
                    ?
                    <h1>Matches Current</h1>
                    :
                    <p className="search__no-matches">There is no Matches currently</p>
                    }
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
                                    <td>{item.match_number || '—'}</td>
                                    <td>{item.location || '—'}</td>
                                    <td>{item.datetime || '—'}</td>
                                    <td>{item.status || '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}

                { endpoint === 'teams' &&
                <div>
                    { !!this.props.items.length
                    ?
                    <h1>Teams All</h1>
                    :
                    <p className="search__no-matches">There is no Teams</p>
                    }
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
                                    <td>{item.country || '—'}</td>
                                    <td>{item.fifa_code || '—'}</td>
                                    <td>{item.group_id || '—'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>}

                { endpoint === 'group_results' &&
                <div>
                    { !!this.props.items.length
                    ?
                    <h1>Teams Group</h1>
                    :
                    <p className="search__no-matches">There is no Groups</p>
                    }
                    <Table>
                        <thead>
                          <tr>
                            <th scope="row">country</th>
                            <th scope="row">fifa code</th>
                            <th scope="row">group id</th>
                            <th scope="row">wins</th>
                            <th scope="row">draws</th>
                            <th scope="row">losses</th>
                            <th scope="row">goals for</th>
                            <th scope="row">goals against</th>
                            <th scope="row">knocked out</th>
                            <th scope="row">updated at</th>
                          </tr>
                        </thead>
                        <tbody>
                            {this.props.items.map((item) => (
                                <tr key={uuidv1()}>
                                    <td>{item.country || '—'}</td>
                                    <td>{item.fifa_code || '—'}</td>
                                    <td>{item.group_id || '—'}</td>
                                    <td>{item.wins || '—'}</td>
                                    <td>{item.draws || '—'}</td>
                                    <td>{item.losses || '—'}</td>
                                    <td>{item.goals_for || '—'}</td>
                                    <td>{item.goals_against || '—'}</td>
                                    <td>{item.knocked_out || '—'}</td>
                                    <td>{moment(item.updated_at).format("LLLL")}</td>
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
    countryUpdate: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    endpoint: PropTypes.string.isRequired,
    country: PropTypes.string,
    hasErrored: PropTypes.bool.isRequired,
}

export default Search
