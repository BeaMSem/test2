var FormAddRecord = React.createClass({


    getInitialState: function(){
        return({
            name: '',
            amount: '',
            payment_method: 0,
            shop: 0

        })
    },
    onChange: function(e) {
        var name = e.target.name;
        var value = e.target.value;
        var obj = {};
        obj[name] = value;

        this.setState(obj);

        console.log(name);
        console.log(value);

    },
    onSubmit: function(){

        console.log('from on Submit');
        console.log(this.refs.name.value);
        console.log(this.refs.amount.value);
        console.log(this.state.payment_method);
        console.log(this.state.shop);

        var new_record = {
            name: this.refs.name.value,
            amount: this.refs.amount.value,
            payment_method_index: this.state.payment_method,
            shop_index: this.state.shop
        };
        console.log(new_record);
        this.props.addToRecords(new_record);

        this.setState({
            name: '',
            amount: '',
            payment_method: 0,
            shop: 0
        });
        console.log('');
    },

    onRadioChange: function(e){
        var name = e.target.name;
        var value = e.target.value;
        var obj = {};
        obj[name] = value;

        this.setState(obj);

        console.log(name);
        console.log(value);
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
    renderSingleButton: function(payment_method, index){
        return(
            <div key = {index} >
                <label>
                    <input
                        type="radio"
                        name = "payment_method"
                        value = {index}
                        defaultChecked= {this.state.payment_method === index}
                        onChange = {this.onRadioChange}

                    />
                    {payment_method.name}
                </label>

            </div>
        )
    },
    renderPaymentMethodsButtons: function(){
        return(
            <div className="payment_method_buttons">
                {this.props.paymentMethodsArray.map(this.renderSingleButton)}
            </div>
        )
    },
    renderSingleShopIcon: function(shop, index){
        return(

        <div key = {index} >
            <label>
                <input
                    type="radio"
                    name = "shop"
                    value = {index}
                    defaultChecked= {this.state.shop === index}
                    onChange = {this.onRadioChange}

                />
                <ShopIcon
                    shop = {shop}
                    key = {index}
                    array_index = {index}
                />
            </label>
        </div>





        )
    },
    renderListShops: function(){
        return(
            <div className="list_shop_icon">
                {this.props.shops.map(this.renderSingleShopIcon)}
            </div>
        )
    },
    renderForm: function(){
        return(
            <div className="records_form">
                {this.renderInputs()}
                {this.renderPaymentMethodsButtons()}
                {this.renderListShops()}
                <input type="button" value="submit" onClick={this.onSubmit}/>
            </div>
        )
    },
    render:function(){
        return(this.renderForm())
    }
});