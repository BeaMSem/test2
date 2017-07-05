class Subcategory < ApplicationRecord

  belongs_to :category
  has_many :settings_entities

end
