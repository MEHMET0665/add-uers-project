import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => { 
    return (
        <tbody>
          {props.users.map(item=>{
            return <tr>
            <td>{item.name}</td>
            <td>{item.job}</td>
          </tr>
          })}
           
        </tbody>
      )
}

class Table extends Component {
    render() {
      return (
        <table>
          <TableHeader />
          <TableBody users={this.props.name}/>
        </table>
      )
    }
  }

export default Table;