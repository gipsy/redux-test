import React from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import ProgressBarProvider from 'react-redux-progress'
import './PageLayout.scss'

export const PageLayout = ({ isProgressActive, children }) => (
  <div className='container text-center'>
    <h1>React Redux Test project</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
    {' · '}
    <Link to='/search' activeClassName='page-layout__nav-item--active'>Search</Link>
    <div className='page-layout__viewport'>
      <ProgressBarProvider
          isActive={this.props.isProgressActive}
          className="progress-bar"
          styles={customStyles}
      />
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default connect(
  state => ({
      isProgressActive: state.progress.isActive,
  })
)(PageLayout)
