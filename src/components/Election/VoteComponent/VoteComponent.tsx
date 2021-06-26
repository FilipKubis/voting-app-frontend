import React from 'react'
import { ICandidate } from '../Election'
import styles from './VoteComponent.module.css'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'
import { withStyles } from '@material-ui/core'

/**
 * @description Props interface for the Vote component
 * @property onChange: called when updating budget to reflect the change in parent component
 */
interface IProps {
  onChange(_newBudget: number[]): void
  candidates: ICandidate[]
}

/**
 * @description Defines typography with changed font family
 */
const StyledTypography = withStyles({
  root: {
    fontFamily: 'Roboto Mono'
  }
})(Typography)

export default class VoteComponent extends React.Component<IProps, {}> {
  /**
   * @description Accepts candidates in props and initializes budget allocated to each candidate to 0
   * @param props
   */
  constructor(public props: IProps) {
    super(props)
  }

  /**
   * @description Takes candidate index and produces a function which modifies respective slider value
   * @param index Index of candidate - Determines which state value is modified.
   * @returns A state modifier function called by changed slider
   */
  private changeFactory = (index: number) => (event: any, newValue: number | number[]) => {
    console.log(event)
    this.setState((state) => {
      const candidates = this.props.candidates
      const budgetSizes = candidates.map(({ budget }) => budget)
      const maxBudget = 1000 - budgetSizes.reduce((a, b) => a + b, 0) + budgetSizes[index]

      budgetSizes[index] = Math.min(newValue as number, maxBudget)

      // Reflect the change in the parent component
      this.props.onChange(budgetSizes)

      return state
    })
  }

  /**
   *
   * @returns List of JSX sliders with a slider for each candidate
   */
  private createVoteSlider = (candidate: ICandidate, index:number) => {
    return (
      <div className={styles.slider} key={index}>
        <StyledTypography id='discrete-slider' gutterBottom >
          {candidate.name}
        </StyledTypography>
        <Slider
          value={candidate.budget}
          aria-labelledby='continuous-slider'
          valueLabelDisplay='auto'
          onChange={this.changeFactory(Number(index))}
          max={1000}
        />
      </div>
    )
  }

  public render = () => {
    const voteSliders = this.props.candidates.map(this.createVoteSlider)

    return (
      <div className={styles.VoteComponent} data-testid='VoteComponent'>
        {voteSliders}
      </div>
    )
  }
}
