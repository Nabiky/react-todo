var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function () {
  var showCompleted = this.refs.showCompleted.checked;// this variable is gonna be true or false
  var searchText = this.refs.searchText.value;
  this.props.onSearch(showCompleted, searchText);
  },
  render: function () {
    return (
      //Tienen q ir pegada las lineas ...er__header...
      <div className="container__header">
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed todos
          </label>
        </div>
      </div>
    )
  }
});

module.exports = TodoSearch;
