Rails.application.routes.draw do

  get 'expenses/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :settings_entities
  resources :budget_entities
  resources :expenses

end
