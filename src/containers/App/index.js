import React, { PureComponent } from 'react';


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