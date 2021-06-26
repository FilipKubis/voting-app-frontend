import React from 'react';
import Loader from 'react-loader-spinner';
import styles from './ElectionHome.module.css';
import ElectionList from './ElectionList/ElectionList';


export interface IElection {
  name: string,
  uuid: string
}

interface IState {
  elections: IElection[]
}

export default class ElectionHome extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props)

    this.state = { elections: [] }
  }

  componentDidMount = () => {
    fetch(`/api/elections`)
      .then(response => {
        return response.json()
      })
      .then(elections => {
        this.setState({ elections })
      })
  }

  public render = () => {

    const electionList = <ElectionList elections={this.state.elections} />
    const loader = <Loader type="Bars" color='#e6e4db' height={80} width={80} />
    const electionListOrLoader = this.state.elections.length ? electionList : loader

    return (
      <div className={styles.ElectionHome} data-testid="ElectionHome">
        Button to create a new election

        <h1>
          Some header for public elections  
        </h1>

        {electionListOrLoader}
      </div>
    )
  }
}
