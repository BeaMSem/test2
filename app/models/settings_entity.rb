class SettingsEntity < ApplicationRecord

  belongs_to :subcategory
  has_one :category, through: :subcategory

end
