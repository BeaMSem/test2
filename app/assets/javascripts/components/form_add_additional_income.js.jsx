var FormAddAdditionalIncome = React.createClass({

    getInitialState: function(){
        return({
            name: '',
            amount:''
        })
    },
    onChange: function(e) {
        // var name = e.target.name;
        // var value = e.target.value;
        // var obj = {};
        // obj[name] = value;
        //
        // this.setState(obj);
        //
        // console.log(name);
        // console.log(value);

    },
    onSubmit: function(){

        {/*console.log('from on Submit');*/}
        {/*console.log(this.refs.name.value);*/}
        // console.log(this.refs.amount.value);
        // console.log(this.state.payment_method);
        // console.log(this.state.shop);
        //
        // var new_record = {
        //     name: this.refs.name.value,
        //     amount: this.refs.amount.value,
        //     payment_method_index: this.state.payment_method,
        //     shop_index: this.state.shop
        // };
        // console.log(new_record);
        // this.props.addToRecords(new_record);
        //
        // this.setState({
        //     name: '',
        //     amount: '',
        //     payment_method: 0,
        //     shop: 0
        // });
        // console.log('');
    },



    renderInputs: function(){
        return(
            <div>
                <input
                    type="text"
                    name = "name"
                    placeholder = 'enter the name'
                    ref = "name"
                    value={this.state.name}
                    onChange = {this.onChange}
                />

                <input
                    type="text"
                    name = "amount"
                    placeholder = 'enter the amount'
                    ref = "amount"
                    value={this.state.amount}
                    onChange = {this.onChange}
                />
            </div>
        )
    },
    renderForm: function(){
        return(
            <div className="records_form">
               occasional income
                {this.renderInputs()}
                <input type="button" value="add income" onClick={this.onSubmit}/>
            </div>
        )
    },
    render:function(){
        return(this.renderForm())
    }
});