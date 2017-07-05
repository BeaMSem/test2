class CreateSettingsEntities < ActiveRecord::Migration[5.0]
  def change
    create_table :settings_entities do |t|
      t.string :name
      t.string :category_name
      t.integer :subcategory_id

      t.decimal :total, :null => true
      t.decimal :balance, :null => true
      t.decimal :payment, :null => true

      t.boolean :monthly_expense, :default => false
      t.timestamps
    end
  end
end
