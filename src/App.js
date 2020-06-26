import React from 'react';
import StockTable from './StockTable';

const StockChart = React.lazy(() => import('./StockChart'));

class App extends React.Component {
  state = {
    selectedStock: null,
  };
  render() {
    const { stocks } = this.props;
    const { selectedStock } = this.state;
    return (
      <React.Suspense fallback={<div>loading...</div>}>
        <StockTable
          stocks={stocks}
          onSelect={(selectedStock) => this.setState({ selectedStock })}
        />
        {selectedStock && (
          <StockChart
            stock={selectedStock}
            onClose={() => this.setState({ selectedStock: false })}
          />
        )}
      </React.Suspense>
    );
  }
}

export default App;
