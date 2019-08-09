import Root from './layout';
import store from './store';
import * as React from 'react';
import { Provider } from 'react-redux';
class App extends React.Component {
  public render() {
    return (
      <Provider store={store as any}>
        <Root />
      </Provider>
    );
  }
}

export default App;
