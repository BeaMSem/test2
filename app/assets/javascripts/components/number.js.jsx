var Number = React.createClass({
    render:function(){
        return(
            <div className="number">
                <div className="number_title">{this.props.name} </div>
                <div className="number_amount">£ {this.props.amount}</div>
            </div>
        )
    }
});