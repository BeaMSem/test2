var NumberTableSingle = React.createClass({
    render:function(){
        return(
            <div
                className="number_table_single"
                style = {{backgroundColor: this.props.color}}
            >{this.props.children}
            </div>
        )
    }
});