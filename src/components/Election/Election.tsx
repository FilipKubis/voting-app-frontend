import React from 'react'
import styles from './Election.module.css'

import ChartComponent from './ChartComponent/ChartComponent'
import VoteComponent from './VoteComponent/VoteComponent'
import { Button, withStyles } from '@material-ui/core'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

export interface ICandidate {
  name: string
  votes: number
  budget: number
}

/**
 * @description Props interface for the Election component
 */
 interface IProps {
  match: {
    params: {
      uuid: string
    }
  }
}

/**
 * @description State interface for the App component
 */
interface IState {
  candidates: ICandidate[]
}


const StyledButton = withStyles({
  root: {
    fontFamily: 'Roboto Mono',
    textTransform: 'none'
  }
})(Button)

/**
 * @description Renders the given election
 */
export default class Election extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    
    this.state = { candidates: [] }
  }
  
  componentDidMount = () => {
    fetch(`/api/elections/${this.props.match.params.uuid}/candidates`)
      .then(response => {
        return response.json()
      })
      .then(candidates => {
        this.setState({ candidates })
      })
  }

  /**
   * @description updates the budget of the voter in the current election
   * @param newBudget new budget as passed by VoteComponent back to App component (via Election)
   */
   private onChange = (newBudget: number[]) => {
    this.setState((state) => {
      const candidates = state.candidates.map((item, index) => {
        return { ...item, budget: newBudget[index] }
      })
      return { candidates }
    })
  }

  /**
   * @description Updates the election results after vote submission
   */
   private onSubmit = () => {
    this.setState((state) => {
      const candidates = state.candidates.map(({ name, votes, budget }) => {
        return { name, votes: votes + budget ** 0.5, budget: 0 }
      })
      return { candidates }
    })
  }
  
  render = () => {

    if(this.state.candidates.length) {
      return (
        <div className={styles.Election} data-testid='Election'>
          <ChartComponent candidates={this.state.candidates} />
  
          <div className={styles.vote}>
            <VoteComponent candidates={this.state.candidates} onChange={this.onChange} />
            <div>
              <StyledButton variant='contained' onClick={this.onSubmit}>
                SUBMIT
              </StyledButton>
            </div>
          </div>
        </div>
      )
    }

    else { 
      return (
          <Loader type="Bars" color='#e6e4db' height={80} width={80} />
      )
    }
  }
}
