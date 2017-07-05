# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


category = Category.create(
    :name => 'Income',
    :resource => true,
    :expense  => false,
    :debt     => false
)
subcategories = ['monthly income']
subcategories.each do |subcategory|
  sub_cat = Subcategory.create(
      :name     => subcategory,
  )
  category.subcategories << sub_cat
end

# category = Category.create(
#     :name => 'Current Account',
#     :resource => true,
#     :expense  => false,
#     :debt     => false
# )
# subcategories = ['monthly income']
# subcategories.each do |subcategory|
#   sub_cat = Subcategory.create(
#       :name     => subcategory,
#   )
#   category.subcategories << sub_cat
# end



category = Category.create(
    :name     => 'Revolving Credits',
    :resource => true,
    :expense  => true,
    :debt     => true
)
subcategories = ['credit card / PayPal']
subcategories.each do |subcategory|
  sub_cat = Subcategory.create(
      :name     => subcategory,
  )
  category.subcategories << sub_cat
end

category = Category.create(
    :name     => 'Loans',
    :resource => false,
    :expense  => true,
    :debt     => true
)
subcategories = ['loan']
subcategories.each do |subcategory|
  sub_cat = Subcategory.create(
      :name     => subcategory,
  )
  category.subcategories << sub_cat
end

category = Category.create(
    :name     => 'Monthly Expenses',
    :resource => false,
    :expense  => true,
    :debt     => false
)
subcategories = %w(housing utilities car/transport children/education food/household internet/mobile/tv subscription other)
subcategories.each do |subcategory|
  sub_cat = Subcategory.create(
      :name     => subcategory,
  )
  category.subcategories << sub_cat
end

category = Category.create(
    :name     => 'Savings',
    :resource => true,
    :expense  => true,
    :debt     => false
)
subcategories = ['savings']
subcategories.each do |subcategory|
  sub_cat = Subcategory.create(
      :name     => subcategory,
  )
  category.subcategories << sub_cat
end

subcategories = Subcategory.all
subcategories.each do |subcategory|
  3.times do |i|
    entry = SettingsEntity.create(
        :name => "Entry #{i}",
        :category_name => subcategory.category.name,
        :total => 1000,
        :balance  => 100,
        :payment     => 50,
        :monthly_expense => false
    )
    subcategory.settings_entities << entry
  end
end