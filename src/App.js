import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

import './App.css';
import instructions from './instructions.json';

const columns = [
  {
    dataField: 'asm',
    text: 'Asm / Instruction',
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: 'code',
    text: 'Code',
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: 'alias',
    text: 'Alias',
    sort: true,
    filter: textFilter(),
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
        <div>Based on <a href="https://test.ton.org/tvm.pdf#subsection.A.2" target="_blank">TVM.pdf</a> and <a href="https://test.ton.org/fiftbase.pdf#appendix.A" target="_blank">FIFTbase.pdf</a></div>
        <div className="alert alert-danger">In progress. Not all codes/instructions are covered</div>
      </header>

      <div className="spreadsheet">
        <BootstrapTable
          keyField='asm'
          hover
          striped
          condensed
          data={ instructions }
          filter={ filterFactory() }
          columns={ columns } />
      </div>
    </div>
  );
}

export default App;
