import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'
import ProgressBarProvider from 'react-redux-progress'
import Radio from '../../../components/radio'
import { reduxForm } from 'redux-form'
import { Field } from 'redux-form'

class SearchResults extends Component {
    componentDidMount() {
        this.props.fetchData('http://worldcup.sfg.io/matches')
    }

    render() {
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
                <Field
                    name="matchesFilter"
                    label="Worldcup Matches Filter"
                    component={Radio}
                    options={{
                        allMatches: 'All Matches',
                        todayMatches: 'Today Matches',
                        currentMatches: 'CurrentMatches'
                    }}
                />
                <Field
                  name="teamFilter"
                  label="Worldcup Team Filter"
                  component={Radio}
                  options={{
                      allTeams: 'All Teams',
                      groupTeams: 'Group Teams'
                  }}
                />
                <ul>
                    {this.props.items.map((item) => (
                        <li key={uuidv1()}>
                            {item.home_team.country}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

SearchResults.propTypes = {
    fetchData: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

const formConfiguration = {
  form: 'my-very-own-form'
}

export default reduxForm(formConfiguration)(SearchResults)
