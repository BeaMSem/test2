var CreditCardForm = React.createClass({

    getInitialState:function(){
        return({
            name:       '',
            total:      '',
            balance:    '',
            payment:    ''
        })
    },

    onChange:function(e){
        var name = e.target.name;
        var value = e.target.value;
        var obj = {};
        obj[name] = value;
        this.setState(obj);
    },

    onAdd:function(){

        var new_setting = {
            name:       this.refs.name     != null ? this.refs.name.value : null,
            total:      this.refs.total    != null ? this.refs.total.value: null,
            balance:    this.refs.balance  != null ? this.refs.balance.value: null,
            payment:    this.refs.payment  != null ? this.refs.payment.value: null
        };

        $.ajax({
            method: 'post',
            url: '/settings_entities',
            dataType: 'JSON',
            data: {
                settings_entity: new_setting,
                subcategory_id: this.props.subcategory.id
            },
            context: this,
            success: function(data){

                this.props.addToSettings(data);

                this.setState({
                    name:       '',
                    total:      '',
                    balance:    '',
                    payment:    ''
                });

                this.props.toggleAddToSettingsVisible();
            }

        });

    },

    render(){
        return(
            <div className="subcategory_form">
                <div>{this.props.form_name}</div>

                <div><input
                    type="text"
                    name="name"
                    ref='name'
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.onChange}
                /></div>
                <div><input
                    type="text"
                    name="total"
                    ref='total'
                    placeholder="Limit"
                    value={this.state.total}
                    onChange={this.onChange}
                /></div>
                <div><input
                    type="text"
                    name="balance"
                    ref='balance'
                    placeholder="Balance"
                    value={this.state.balance}
                    onChange={this.onChange}
                /></div>
                <div><input
                    type="text"
                    name="payment"
                    ref='payment'
                    placeholder="Monthly repayment"
                    value={this.state.payment}
                    onChange={this.onChange}
                /></div>

                <div><input type="button" value='add' onClick={this.onAdd}/></div>
                <div><input type="button" value='cancel' onClick={this.props.toggleAddToSettingsVisible}/></div>
            </div>
        )
    }
});