class CreateBudgetEntities < ActiveRecord::Migration[5.0]
  def change
    create_table :budget_entities do |t|

      t.string  :name
      t.decimal :in_credit, :default => nil
      t.decimal :in_debt, :default => nil
      t.boolean :savings
      t.boolean :income
      t.boolean :payment_method
      t.timestamps

    end
  end
end
