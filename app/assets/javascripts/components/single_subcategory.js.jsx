var SubcategorySingle = React.createClass({

    reduceSettingsArray: function(){


        current_category = null;
        array_index = null;

        return (
            this.props.settings
                .map(function(setting, index){
                    return setting;
                }).reduce(function(endGoal, iterated, index, array){
                        // console.log('index');
                        // console.log(index);
                        // console.log('array');
                        // console.log(array);
                        // console.log('iterated');
                        // console.log(iterated);
                        // console.log('iterated name');
                        // console.log(iterated.name);
                        // console.log('iterated category_name');
                        // console.log(iterated.category_name);
                        // console.log('endGoal');
                        // console.log(endGoal);
                        // console.log('current_category');
                        // console.log(current_category);


                            obj = {
                                category: '',
                                items: []
                            };

                            iterated.category_name != current_category
                            ?   (

                                array_index = array_index == null ? 0 : array_index + 1,


                                    obj.category = iterated.category_name,
                                    obj.items.push({
                                        id: iterated.id,
                                        name: iterated.name,
                                        balance: iterated.balance,
                                        total: iterated.total,
                                        payment: iterated.payment }),

                                    current_category = iterated.category_name,


                                    // console.log('endGoal'),
                                    // console.log(endGoal),
                                    //     console.log('attay_index'),
                                    //     console.log(array_index),
                                    // console.log('obj'),
                                    // console.log(obj),

                                    endGoal[array_index] = obj

                                        // console.log('array_index'),
                                        // console.log(array_index)

                                ):
                                (       endGoal[array_index].items.push({
                                        id: iterated.id,
                                        name: iterated.name,
                                        balance: iterated.balance,
                                        total: iterated.total,
                                        payment: iterated.payment}));

                        return endGoal
                    },[]
                )
        )
    },

    getInitialState: function(){
        return({
            settings: this.reduceSettingsArray(),
            subcategory: this.props.subcategory
        })
    },
    render: function(){
        console.log('this.state.settings');
        console.log(this.state.settings);

        return(
            <div>

            </div>
        )
    }
});