import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color:red;
`


class App extends PureComponent {
  render() {
    const content = (
      <div>
        <div className="container">
          <div className="row">
            <div className="col s12">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>);
    return content;
  }
}

export default App;