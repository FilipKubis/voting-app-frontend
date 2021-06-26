import React from 'react'
import styles from './ChartComponent.module.css'
import Chart from 'react-google-charts'
import { ICandidate } from '../Election'

/**
 * @description Renders a chart of the current state of voting
 */
export default class ChartComponent extends React.Component {
  constructor(public props: { candidates: ICandidate[] }) {
    super(props)
  }

  /**
   * 
   * @param candidates The candidate array to be transformed to google chart format
   * @returns The transformed data
   */
  private transformCandidates = (candidates: ICandidate[]) => {
    const columnHeader = ['Candidate', 'Total Votes']
    const columns = candidates.map(candidate => [candidate.name, candidate.votes])
    columns.unshift(columnHeader)

    return columns
  }

  render = () => {
    return (
      <div className={styles.ChartComponent} data-testid='ChartComponent'>
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="BarChart"
          loader={<div>Loading Chart</div>}
          data={this.transformCandidates(this.props.candidates)}
          options={{
            title: 'The worlds most favorite entrepreneurs',
            chartArea: { width: '50%' },
            hAxis: {
              title: 'Total Votes',
              minValue: 0,
            },
            vAxis: {
              title: 'Candidate',
            },
            fontName: 'Roboto Mono'
          }}
          style={{
            fontFamily: 'Roboto Mono'
          }}
        />
      </div>
    )
  }
}
