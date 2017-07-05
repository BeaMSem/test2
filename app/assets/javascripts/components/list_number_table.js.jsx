var NumberTableList = React.createClass({

    getInitialState(){
        return{
            budget_entities: this.props.budget_entities,
            records: [],
            shops: [
                {   name: 'Tesco',
                    initials: 'T',
                    color: '#2E41A9',
                },
                {   name: 'Sainsbury',
                    initials: 'S',
                    color: '#ff8c00',
                },
                {   name: 'Waitrose',
                    initials: 'W',
                    color: '#165716',
                },
                {   name: 'M&S',
                    initials: 'M',
                    color: '#2E2F30',
                },
                {   name: 'Other',
                    initials: 'O',
                    color: '#818284',
                }
            ]
        }
    },
    addToRecords:function(new_record){
        console.log('addToRecords');
        console.log('new_record');
        console.log(new_record);
        var records_array = this.state.records;
        console.log('var records_array');
        console.log(records_array);
        records_array.unshift(new_record);
        console.log('unshift');
        console.log(records_array);
        this.setState({records: records_array});
        console.log('set state');
        console.log(this.state.records);
        this.updateBudgetEntities(new_record);
    },
    deleteFromRecords: function(){
        console.log('deleteFromRecords');
        // delete from records table
        this.updateBudgetEntities();
    },
    updateRecord: function(){
        console.log('updateRecord');
        // update in records table
        this.updateBudgetEntities();
    },
    updateBudgetEntities: function(new_record){
            console.log('function : updateBudgetEntities');
            console.log('arguments');
            console.log(new_record.amount);
            console.log(new_record.payment_method_index);

        var budget_entity = this.state.budget_entities[new_record.payment_method_index];

        console.log('budget_entity');
        console.log(budget_entity);

        budget_entity.in_credit === null ? '' :  budget_entity.in_credit = parseFloat(budget_entity.in_credit) - parseFloat(new_record.amount);
        budget_entity.in_debt === null ? '' :  budget_entity.in_debt = parseFloat(budget_entity.in_debt) + parseFloat(new_record.amount);


        console.log('');

    },
    debtArray: function(){
          return this.props.budget_entities.filter(function(entity){
              return entity.in_debt > 0
          });
    },
    debtTotal: function(){
        return this.debtArray().reduce(function(total, value){
            return total + value.in_debt
        }, 0);
    },
    renderDebts: function(){
        return(
            this.debtArray().map(function(debt, index){
               return(
                   <Number
                       name = {debt.name}
                       amount = {debt.in_debt}
                       key = {index}
                   />
                   )
            })
        )
    },
    savingsArray: function(){
        return this.props.budget_entities.filter(function(entity){
            return entity.savings == true;
        });
    },
    savingsTotal: function(){
        return this.savingsArray().reduce(function(total, current){
            return total + current.in_credit
        }, 0);
    },
    renderSavings: function(){
        return(

            this.savingsArray().map(function(savings, index){
                return(
                    <Number
                        name = {savings.name}
                        amount = {savings.in_credit}
                        key = {index}
                    />
                )
            })
        )
    },
    incomesArray: function(){
        return  this.props.budget_entities.filter(function(value){
            return value.income == true
        });
    },
    incomesTotal: function(){
        return this.incomesArray().reduce(function(total, value){
            return total + value.in_credit
        }, 0);
    },
    otherResources: function(){
        return(
            this.paymentMethodsArray().filter(function(value, index){
                return value.savings == false && value.income == false
            })
        )
    },
    renderOtherResources: function(){
        return(

            this.otherResources().map(function(pay_met, index){
                return(
                    <Number
                        name = {pay_met.name}
                        amount = {pay_met.in_credit}
                        key = {index}
                    />
                )
            })
        )
    },
    paymentMethodsArray: function(){
        return this.props.budget_entities.filter(function(value){
            return value.payment_method == true
        });
    },
    paymentMethodsTotal: function(){
        return this.paymentMethodsArray().reduce(function(total, current){
            return total + current.in_credit
        }, 0);
    },
    renderNumberTableSingle:function(){
            return(
                <div className="number_table_list">

                    <NumberTableSingle
                        key = {1}
                        color = '#429DD6'
                    >
                        <TopComponent>
                            <Number
                                name = 'Total Income'
                                amount = {this.incomesTotal()}
                            />
                        </TopComponent>
                        <BottomComponent>{this.renderOtherResources()}</BottomComponent>
                    </NumberTableSingle>

                    <NumberTableSingle
                        key = {2}
                        color = '#1BBC9C'
                    >
                        <TopComponent>
                            <Number
                                name = 'Total Savings'
                                amount = {this.savingsTotal()}
                            />
                        </TopComponent>
                        <BottomComponent>{this.renderSavings()}</BottomComponent>
                    </NumberTableSingle>

                    <NumberTableSingle
                        key = {3}
                        color = '#E14A3B'
                    >
                        <TopComponent>
                            <Number
                                name = 'Total Debts'
                                amount = {this.debtTotal()}
                            />
                        </TopComponent>
                        <BottomComponent>{this.renderDebts()}</BottomComponent>
                    </NumberTableSingle>

                </div>
            )
    },
    renderExpensesForm: function(){
        return(
            <FormAddRecord
                paymentMethodsArray = {this.paymentMethodsArray()}
                addToRecords = {this.addToRecords}
                shops = {this.state.shops}
            />
        )
    },
    renderSingleRecord: function(record, index){
                console.log('function : renderSingleRecord');
                console.log('record');
                console.log(record);
                console.log('index');
                console.log(index);
                console.log('');

        return(
            <SingleRecord
                key         = {index}
                array_index = {index}
                record      = {record}
                payment_method_name = {this.state.budget_entities[record.payment_method_index].name}
                shop = {this.state.shops[record.shop_index]}
            />
        )
    },
    renderRecords: function(){
                console.log('function : renderRecord');
                console.log('this.state.records');
                console.log(this.state.records);
                console.log('');

        return(
            this.state.records.length === 0 ? '': <ListRecord>{this.state.records.map(this.renderSingleRecord)}</ListRecord>
        )
    },

    test:function(current){
       return(
           <div>{current}</div>
       )
    },
    render(){
        console.log('this.props.budget_entities');
        console.log(this.props.budget_entities);
        {/*console.log('debtArray');*/}
        {/*console.log(this.debtArray());*/}
        {/*console.log('debtTotal');*/}
        {/*console.log(this.debtTotal());*/}
        {/*console.log('savingsArray');*/}
        // console.log(this.savingsArray());
        // console.log('savingsTotal');
        // console.log(this.savingsTotal());
        // console.log('paymentMethodsArray');
        // console.log(this.paymentMethodsArray());
        // console.log('paymentMethodsTotal');
        // console.log(this.paymentMethodsTotal());
        // console.log('incomesArray');
        // console.log(this.incomesArray());
        // console.log('incomesTotal');
        // console.log(this.incomesTotal());

        console.log('prev + " "+ curr');

        // {/*{[2,7,4,4,4,4,9,6,6,8,10].reduce(function(prev, curr){*/}
        //     {/*// console.log('prev');*/}
        //     {/*// console.log(prev);*/}
        //     {/*// console.log('curr');*/}
        //     {/*// console.log(curr);*/}
        //
        //     {/*var name = prev !== curr ? curr : '';*/}
        //
        //
        // //
        // //     console.log('name');
        // //     console.log(name);
        // //
        // //     return curr;
        // // },0)}

        // [2,7,4,4,4,4,9,6,6,8,10].reduce(function(p,c){
        //     var array = [p,c];
        //     console.log(array);
        //     return array
        // });





        return(

            <div>
                {/*{ previous = null}*/}
                {/*{[2,7,4,4,4,4,9,6,6,8,10].map(function(value, index){*/}
                    {/*var name = value !== previous ? value : '';*/}
                        {/*console.log('name');*/}
                        {/*console.log(name);*/}
                    {/*previous = value;*/}
                        {/*return(<div key = {index}>{name}</div>)*/}
                {/*})}*/}

                {this.renderNumberTableSingle()}
                {this.renderExpensesForm()}
                {this.renderRecords()}
                <FormAddAdditionalIncome/>
                <FormSavingsTransfer

                />
                <FormOccasionalDebtRepayment
                />
            </div>

        )

    }

});