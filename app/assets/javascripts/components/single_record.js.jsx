var SingleRecord = React.createClass({

    getInitialState: function(){
        return({
            editingState: false,
            name: this.props.record.name,
            amount: this.props.record.amount,
        })
    },
    onChange: function(e){
        var name = e.target.name;
        var value = e.target.value;
        var obj = {};
        obj[name] = value;

        this.setState(obj);

        console.log(name);
        console.log(value);
    },
    onUpdate: function(){
        alert(' onUpdate : thinking in progress');
        this.setState({
            editingState: false
        });
    },
    onDelete: function(){
        alert('onDelete : thinking in progress');
        this.setState({
            editingState: false
        });
    },
    toggleEditingState: function(){
        this.setState({
            editingState: !this.state.editingState
        })
    },
    renderShopIcon : function(){
       return(
           <ShopIcon
               shop = {this.props.shop}
           />
       )
    },
    renderDisplay: function(){
        return(
            <div className="single_record">
                <div className="single_record_data">
                    <div className="single_record_name">{this.props.record.name}</div>
                    <div className="single_record_quantity">1</div>
                    <div className="single_record_amount">£ {this.props.record.amount}</div>
                    <div className="single_record_payment_method">{this.props.payment_method_name}</div>
                    <div className="single_record_date">1 April 2017</div>
                    {this.renderShopIcon()}

                </div>
                <div className="single_record_buttons">
                    <input type="button" value ='add to shopping list'/>
                    <input type="button" value ='edit' onClick={this.toggleEditingState}/>
                    <input type="button" value ='delete' onClick={this.onDelete}/>
                </div>

            </div>
        )
    },
    renderEditForm: function(){
        return(
            <div className="single_record">
                <input
                    type="text"
                    name="name"
                    ref="name"
                    value={this.state.name}
                    onChange={this.onChange}
                />
                <input
                    type="text"
                    name="amount"
                    ref="amount"
                    value={this.state.amount}
                    onChange={this.onChange}
                />
                <div className="single_record_payment_method">here goes the payment methods component</div>
                <input type="button" value ='update' onClick={this.onUpdate}/>
                <input type="button" value ='cancel' onClick={this.toggleEditingState}/>

            </div>
        )
    },
    renderSingleRecord: function(){
        return(
            this.state.editingState ? this.renderEditForm() : this.renderDisplay()
        )
    },
    render : function(){
        return(
            this.renderSingleRecord()
        )
    }
});