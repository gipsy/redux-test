import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'
import ProgressBarProvider from 'react-redux-progress'
import {Form, FormGroup, Label, Input } from 'reactstrap'

class SearchResults extends Component {
    componentDidMount() {
        this.props.fetchData('http://worldcup.sfg.io/matches')
    }

    handleChange(values) {
      console.log('filter changed')
      console.log(values)
      switch (values) {
        case 'matches_results':
          return this.props.fetchData('http://worldcup.sfg.io/matches')

        case 'matches_today':
          return this.props.fetchData('http://worldcup.sfg.io/matches/today')

        case 'matches_current':
          return this.props.fetchData('http://worldcup.sfg.io/matches/current')

        case 'teams':
          return this.props.fetchData('http://worldcup.sfg.io/teams')

        case 'teams_group':
          return this.props.fetchData('http://worldcup.sfg.io/teams/group_results')

        case 'teams_results':
          return this.props.fetchData('http://worldcup.sfg.io/teams/results')

        default:
          return this.props.fetchData('http://worldcup.sfg.io/matches')
      }
    }

    handleUpdate(form) {
      console.log('filter updated')
      console.log(form)
    }

    handleSubmit(values) {
      console.log('filter submitted')
      console.log(values)
    }

    render() {
       const initialFilterState = {
          endpoint: 'matches_results',
          fifa_code: 'USA',
        };
        const { isLoading, hasErrored, handleSubmit, onSubmit } = this.props

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
                            <Input type="radio" name="endpoint" />{' '}
                            All matches
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="endpoint" checked={true}/>{' '}
                            Today's matches
                        </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                            <Input type="radio" name="endpoint" disabled />{' '}
                            Current mathes
                        </Label>
                    </FormGroup>
                </FormGroup>
            </div>
        );
    }
}

SearchResults.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
}

export default SearchResults
