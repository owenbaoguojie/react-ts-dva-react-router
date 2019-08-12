import Root from './layout';
import React, { Component } from 'react';
// import store from './store';
// import * as React from 'react';
// import { Provider } from 'react-redux';
// class App extends React.Component {
//   public render() {
//     return (
//       <Provider store={store as any}>
//         <Root />
//       </Provider>
//     );
//   }
// }

// export default App;

import dva from 'dva';
import { createBrowserHistory } from 'history';

import createLoading from 'dva-loading';

const app = dva({ history: createBrowserHistory() });
app.use(createLoading());
app.model({ ...require('@/model/count').default });
app.router(() => <Root />);
const getRootNode = app.start();

class App extends Component {
  render() {
    return getRootNode();
  }
}
export default App;
