import React, { Component } from 'react'
import sortBy from 'lodash/sortBy'

class Table extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sortedValue: props.defaultSortedValue,
      sortedOrder: props.sortedOrder
    }
  }

  render () {
    const {columns, elements, customColums} = this.props
    const {sortedValue, sortedOrder} = this.state

    return (
      <table className='table-sorted'>
        <thead>
          <tr>
            {
              columns.map((column, i) => {
                const isSorted = sortedValue === column.name
                const newSortedOrder = sortedOrder === 1 ? -1 : 1
                const icon = isSorted ? sortedOrder > 0 ? 'fa fa-caret-up' : 'fa fa-caret-down' : ''
                return <th key={i} onClick={() => this.setState({sortedValue: column.name, sortedOrder: newSortedOrder})}>{column.value} <span className={icon}/></th>
              })
            }
            {customColums.map((column, i) => <th key={i}>{column.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            this.sortElements(elements).map((element, i) => {
              return (
                <tr key={i}>
                 {columns.map((column, j) => <td key={j}>{element[column.name]}</td>)}
                 {customColums.map((column, j) => <td key={j}>{column.content(element)}</td>)}
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }

  sortElements(elements) {
    const {sortedValue, sortedOrder} = this.state
    return sortedValue ? sortedOrder > 0 ? sortBy(elements, sortedValue) : sortBy(elements, sortedValue).reverse() : elements
  }
}

Table.defaultProps = {
  defaultSortedValue: null,
  sortedOrder: 1,
  customColums: []
}

export default Table
