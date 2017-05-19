var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <hello name="World">,
  document.getElementById('container')
);
</hello>