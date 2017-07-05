class ExpensesController < ApplicationController
  def index
    @budget_entities = BudgetEntity.all
  end
end
