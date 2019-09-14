import React, { Component } from 'react';
import {
  Stickies
} from '../../../src/index';

const mock = require('./mock');

export default class extends Component {

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      showTape: false,
      showOutput: false,
      showTitle: true,
      showFooter: true,
      output: '',
      colors: ['#FFFFFF'],
    };
    this.toggleValue = this.toggleValue.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fetchMock = this.fetchMock.bind(this);
  }

  toggleValue(e) {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  }

  onChange(notes) {
    this.setState({
      output: JSON.stringify(notes, null, 2),
      notes
    });
  }

  fetchMock() {
    this.setState({
      showMock: true
    }, () => {
      this.setState({
        notes: mock.default
      });
    });
  }

  render() {
    let wrapperStyle = {};
    if (this.state.showBound) {
      wrapperStyle = {
        height: '700px',
        width: '700px',
        background: 'rgba(0, 0, 0, 0.2)',

        border: '2px solid #fff',
        overflow: 'auto',
        padding: '10px'
      };
    }
    return (
      <div>
        <div className="header">
          Create your own Sticky Notes
        </div>
        <Stickies
          notes={this.state.notes}
          tape={this.state.showTape}
          style={{ float: 'left' }}

          title={this.state.showTitle}
          footer={this.state.showFooter}
          onChange={this.onChange}
          wrapperStyle={wrapperStyle}
        />
        <div className="config">
          <form>

            <input type="button" name="showTape" value="show_tape" checked={this.state.showTape} onClick={this.toggleValue} />

            <input type="button" name="showTitle" value="show_title" checked={this.state.showTitle} onClick={this.toggleValue} />
            <input type="button" name="showFooter" value="show_footer" checked={this.state.showFooter} onClick={this.toggleValue} />

          </form>

        </div>
      </div>
    );
  }
}
