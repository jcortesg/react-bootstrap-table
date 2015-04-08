import React from 'react';
import classSet from 'classnames';

class TableHeaderColumn extends React.Component{

  render(){
    var thStyle = {
      textAlign: this.props.dataAlign
    };

    return(
      <th style={thStyle}><div className="th-inner">{this.props.children}</div></th>
    )
  }
}
TableHeaderColumn.propTypes = {
  dataField: React.PropTypes.string,
  dataAlign: React.PropTypes.string
};

TableHeaderColumn.defaultProps = {
  dataAlign: "left"
};

export default TableHeaderColumn;
