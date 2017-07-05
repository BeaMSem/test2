class Category < ApplicationRecord

  has_many :subcategories
  has_many :settings_entities, through: :subcategories

end
