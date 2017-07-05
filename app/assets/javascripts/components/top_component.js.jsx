var TopComponent = React.createClass({
    render:function(){
        console.log();
        return(
            <div className="number_table_top_component">{this.props.children}</div>
        )
    }
});