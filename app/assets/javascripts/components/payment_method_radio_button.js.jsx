var PaymentMethodRadioButton = React.createClass({

    onChange: function(e){
        console.log('e.target.value');
        console.log(e.target.value);
        console.log('this.props.payment_method.id');
        console.log(this.props.payment_method.id);
        console.log('this');
        console.log(this);
    },

    render: function(){

        console.log(this.props.payment_method);

        return(
            <div>
                <label>
                    {this.props.payment_method.name}
                    <input
                        type="radio"
                        name = "payment_methods"
                        value = {this.props.array_index}
                        onChange = {this.onChange}
                    />
                </label>

            </div>

        )
    }
});