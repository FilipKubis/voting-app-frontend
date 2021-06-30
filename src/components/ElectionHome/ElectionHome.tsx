import { Button, withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { useHistory } from 'react-router-dom';
import styles from './ElectionHome.module.css';
import ElectionList from './ElectionList/ElectionList';

export interface IElection {
  name: string,
  uuid: string
}

const StyledButton = withStyles({
  root: {
    fontFamily: 'Roboto Mono',
    textTransform: 'none',
  }
})(Button)

const ElectionHome = () => {

  // use state to keep list of elections
  const [state, setState] = useState({ elections: []})

  // fetches a list of elections from backend on mount
  useEffect(() => {
    fetch(`/api/elections`)
    .then(response => {
      return response.json()
    })
    .then(elections => {
      setState({ elections })
    })
  })

  const history = useHistory();

  const onClick = () => {
    history.push('/elections/new')
  } 

  const electionList = <ElectionList elections={state.elections} />
  const loader = <Loader type="Bars" color='#e6e4db' height={80} width={80} />
  const electionListOrLoader = state.elections.length ? electionList : loader

  return (
    <div className={styles.ElectionHome} data-testid="ElectionHome">
      <div className={styles.buttonClass}>
        <StyledButton  variant='contained' onClick={() => onClick}>
          Create a new election
        </StyledButton>
      </div>

      <h1>
        Or participate in a public voting
      </h1>

      {electionListOrLoader}
    </div>
  )
}

export default ElectionHome
