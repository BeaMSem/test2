var SettingSingle = React.createClass({
    getInitialState: function(){
        return({
            editing:    false,
            name:       this.props.setting.name,
            total:      this.props.setting.total,
            balance:    this.props.setting.balance,
            payment:    this.props.setting.payment
        })
    },
    toggleEditingState: function(){
        this.setState({
            editing: !this.state.editing
        })
    },
    onChange:function(e){

        console.log('onChange');
        console.log(e);
        var name = e.target.name;
        var value = e.target.value;
        console.log(name);
        console.log(value);
        var obj = {};
        obj[name] = value;
        this.setState(obj);

    },
    onUpdate:function(){
        console.log('onUpdate');

        var updated_setting = {
            name:       this.props.setting.name     != null ? this.refs.name.value : null,
            total:      this.props.setting.total    != null ? this.refs.total.value: null,
            balance:    this.props.setting.balance  != null ? this.refs.balance.value: null,
            payment:    this.props.setting.payment  != null ? this.refs.payment.value: null
        };

        console.log(updated_setting);
        console.log(this.props.index);



        $.ajax({
            method: 'put',
            url: '/settings_entities/'+this.props.setting.id,
            dataType: 'JSON',
            data: {
                settings_entity: updated_setting
            },
            context: this,
            success: function(data){

                this.props.updateInSettings(data, this.props.index);
                this.toggleEditingState();
                console.log(' End of onUpdate');
            }

        });

    },
    onDelete: function(){
        $.ajax({
            method: 'delete',
            url: '/settings_entities/'+ this.props.setting.id,
            dataType: 'JSON',
            context: this,
            success: function(){
                this.props.removeFromSettings(this.props.index);
                console.log(' End of onDelete');
            }
        });

    },
    renderEditing: function(){
        return(
            <div className="setting_single">

                {this.props.setting.name    != null     ? <div><input type="text" ref="name"    name="name"     value={this.state.name}     onChange={this.onChange}/></div> : ''}
                {this.props.setting.total   != null     ? <div><input type="text" ref="total"   name="total"    value={this.state.total}    onChange={this.onChange}/></div> : ''}
                {this.props.setting.balance != null     ? <div><input type="text" ref="balance" name="balance"  value={this.state.balance}  onChange={this.onChange}/></div> : ''}
                {this.props.setting.payment != null     ? <div><input type="text" ref="payment" name="payment"  value={this.state.payment}  onChange={this.onChange}/></div> : ''}

                <div><input type="button" value='update' onClick={this.onUpdate}/></div>
                <div><input type="button" value='cancel' onClick={this.toggleEditingState}/></div>

            </div>
        )
    },
    renderDisplay: function(){
        return(
            <div className="setting_single">
                {this.props.setting.name    != null     ? <div>{this.props.setting.name}</div>      : ''}
                {this.props.setting.total   != null     ? <div>{this.props.setting.total}</div>     : ''}
                {this.props.setting.balance != null     ? <div>{this.props.setting.balance}</div>   : ''}
                {this.props.setting.payment != null     ? <div>{this.props.setting.payment}</div>   : ''}
                <div><input type="button" value='edit' onClick={this.toggleEditingState}/></div>
                <div><input type="button" value='delete' onClick={this.onDelete}/></div>
            </div>
        )
    },
    renderSettingSingle: function(){
        return(
            this.state.editing ? this.renderEditing() : this.renderDisplay()
        )
    },
    render: function(){
        return(
            this.renderSettingSingle()
        )
    }
});