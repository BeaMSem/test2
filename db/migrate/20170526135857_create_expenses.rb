class CreateExpenses < ActiveRecord::Migration[5.0]
  def change
    create_table :expenses do |t|
      t.string :name
      t.decimal :amount
      t.integer :payment_method

      t.timestamps
    end
  end
end
