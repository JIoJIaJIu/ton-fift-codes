import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

import './App.css';
import instructions from './instructions';

const columns = [
  {
    dataField: 'asm',
    text: 'Asm',
    sort: true,
    classes: 'fit'
  },
  {
    dataField: 'code',
    text: 'Code',
    sort: true
  },
  {
    dataField: 'alias',
    text: 'Alias',
    sort: true
  },
  {
    dataField: 'stack',
    text: 'Stack',
  },
  {
    dataField: 'desc',
    text: 'Description',
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FIFT Spreadsheet</h1>
        <div>Current page contains FIFT codes and instructions for <a href="https://test.ton.org/" target="_blank">TON Blockchain</a></div>
        <div>Based on <a href="https://test.ton.org/" target="_blank">TVM.pdf</a> and <a href="https://test.ton.org/fiftbase.pdf" target="_blank">FIFTbase.pdf</a></div>
        <div className="alert alert-danger">In progress. Not all codes/instructions are covered</div>
      </header>

      <div className="spreadsheet">
        <BootstrapTable
          keyField='asm'
          hover
          striped
          bordered={ false }
          data={ instructions }
          columns={ columns } />
      </div>
    </div>
  );
}

export default App;
