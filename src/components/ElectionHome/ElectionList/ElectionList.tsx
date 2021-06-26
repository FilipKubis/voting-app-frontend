import { Button, withStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { IElection } from '../ElectionHome';
import styles from './ElectionList.module.css';


interface IProps {
  elections: IElection[]
}

const StyledButton = withStyles({
  root: {
    fontFamily: 'Roboto Mono',
    textTransform: 'none',
  }
})(Button)

const createElectionButton = (onClick: (path: string) => void) => (election: IElection) => {
  const to = `/elections/${election.uuid}`

  return (
    <div className={styles.buttonClass}>
      <StyledButton  color='primary' size='small' fullWidth={false} onClick={() => onClick(to)}>
        {election.name}
      </StyledButton>
    </div>
  )  
}


const ElectionList = (props: IProps) => {
  const history = useHistory();

  const onClick = (path: string) => {
    history.push(path)
  }

  const electionLinks = props.elections.map(createElectionButton(onClick))

  return (
    <div className={styles.ElectionList} data-testid="ElectionList">
      {electionLinks}
    </div>
  )
}

export default ElectionList