import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const tableTheme = createMuiTheme({
  overrides: {
    MUIDataTable: {
      responsiveScroll: {
        maxHeight: "65vh",
      },
    },
  },
});

const Table = ({ title, columns, data }) => {
  const labeledColumns = columns.map((name) => {
    return {
      name: name,
      label: name.charAt(0).toUpperCase() + name.slice(1),
      options: {
        filter: true,
        sort: true,
      },
    };
  });

  let labeledData = [];
  for (let rowIndex in data) {
    let rowDataObject = {};
    for (let rowElementIndex in data[parseInt(rowIndex)]) {
      rowDataObject = {
        ...rowDataObject,
        [labeledColumns[parseInt(rowElementIndex)].name]:
          data[parseInt(rowIndex)][parseInt(rowElementIndex)],
      };
    }
    labeledData = labeledData.concat(rowDataObject);
  }

  const options = {
    filterType: "checkbox",
    setRowProps: (row, dataIndex) => {},
    responsive: "scroll",
  };
  return (
    <ThemeProvider theme={tableTheme}>
      <MUIDataTable
        title={title}
        data={labeledData}
        columns={labeledColumns}
        options={options}
      />
    </ThemeProvider>
  );
};

export default Table;
