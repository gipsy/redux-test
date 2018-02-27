import React, { Component } from 'react'
import PropTypes from 'prop-types'
import uuidv1 from 'uuid'

class SearchResults extends Component {
    componentDidMount() {
        this.props.fetchData('http://worldcup.sfg.io/matches')
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>
        }

        if (this.props.isLoading) {
            return <p>Loading…</p>
        }

        return (
            <div>
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
    isLoading: PropTypes.bool.isRequired
};

export default SearchResults
