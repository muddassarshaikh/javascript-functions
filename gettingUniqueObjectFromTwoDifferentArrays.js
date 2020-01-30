var deSelectedRows = [
    { PoHeaderKey: 128, OrderNo: 'WS1', LineNo: 1, id: 'BRIC01' },
    { PoHeaderKey: 129, OrderNo: 'WS1', LineNo: 1, id: 'BRIC02' },
    { PoHeaderKey: 129, OrderNo: 'WS1', LineNo: 1, id: 'BRIC03' },
    { PoHeaderKey: 129, OrderNo: 'WS1', LineNo: 1, id: 'BRIC04' }
  ],
  selectedRows = [
    { PoHeaderKey: 12, OrderNo: 'WS1', LineNo: 1, id: 'BRIC01' },
    { PoHeaderKey: 129, OrderNo: 'WS1', LineNo: 1, id: 'BRIC02' },
    { PoHeaderKey: 129, OrderNo: 'WS1', LineNo: 1, id: 'BRIC03' },
    { PoHeaderKey: 129, OrderNo: 'WS1', LineNo: 1, id: 'BRIC04' }
  ],
  ids = new Set(deSelectedRows.map(({ id }) => id));

selectedRows = selectedRows.filter(({ id }) => !ids.has(id));

console.log(selectedRows);
