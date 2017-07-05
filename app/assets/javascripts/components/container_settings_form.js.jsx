var AddSettingFormContainer = React.createClass({

    getInitialState: function(){
        return({
            add_to_settings_visible: false,
            subcategory: this.props.subcategory
        })
    },
    toggleAddToSettingsVisible: function(){
        this.setState({
            add_to_settings_visible: !this.state.add_to_settings_visible
        })
    },
    renderAddSettingForm:function(){

        switch(this.props.subcategory.name){
            case 'monthly income':
                return(
                    <IncomeForm
                        subcategory = {this.props.subcategory}
                        category = {this.props.category}
                        addToSettings = {this.props.addToSettings}
                        toggleAddToSettingsVisible = {this.toggleAddToSettingsVisible}
                    />
                );
                break;
            case 'credit card / PayPal':
                return(
                    <CreditCardForm
                        subcategory = {this.props.subcategory}
                        category = {this.props.category}
                        addToSettings = {this.props.addToSettings}
                        toggleAddToSettingsVisible = {this.toggleAddToSettingsVisible}
                    />
                );
                break;
            case 'loan':
                return(
                    <LoanForm
                        subcategory = {this.props.subcategory}
                        category = {this.props.category}
                        addToSettings = {this.props.addToSettings}
                        toggleAddToSettingsVisible = {this.toggleAddToSettingsVisible}
                    />
                );
                break;
            case 'savings':
                return(
                    <SavingsForm
                        subcategory = {this.props.subcategory}
                        category = {this.props.category}
                        addToSettings = {this.props.addToSettings}
                        toggleAddToSettingsVisible = {this.toggleAddToSettingsVisible}
                    />
                );
                break;
            default:
                return(
                    <MonthlyExpensesForm
                        subcategory = {this.props.subcategory}
                        category = {this.props.category}
                        addToSettings = {this.props.addToSettings}
                        toggleAddToSettingsVisible = {this.toggleAddToSettingsVisible}
                    />
                );
        }
    },
    renderButton:function(){
        return(
            <input type="button" className="subcategory_form_button" onClick={this.toggleAddToSettingsVisible} value={'add' + this.props.subcategory.name}/>
        )
    },
    renderAddSettingFormContainer:function(){
        return(
            <div className="subcategory_form_wrapper">
                {this.state.add_to_settings_visible ? this.renderAddSettingForm() : null}
                {this.renderButton()}
            </div>
        )
    },
    render: function(){
        console.log(this.props.subcategory);
        return(
            this.renderAddSettingFormContainer()
        )
    }

});