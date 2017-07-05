class SettingsEntitiesController < ApplicationController

  def index
    # @categories = Category.all
    @settings = SettingsEntity.all
  end

  def create
    @setting = SettingsEntity.create(setting_params)
    subcategory = Subcategory.find(params[:subcategory_id])



    if subcategory.settings_entities << @setting

      if @setting.category.name != 'Monthly Expenses'

            factory = BudgetUnitFactory.new
            budget_unit_with_factory = BudgetUnit.new(factory)
            budget_unit = budget_unit_with_factory.create_with_setting(@setting)

            BudgetEntity.create(budget_unit.as_json)

      end

      render json: @setting

    else
      render json: @setting.errors, status: :unprocessable_entity
    end

  end

  def update

    # update budgetEntity

    @setting = SettingsEntity.find(params[:id])
    if  @setting.update(setting_params)
      render json: @setting
    else
      render json: @setting.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @setting = SettingsEntity.find(params[:id])
    @setting.destroy
    @budget = BudgetEntity.find(params[:id])
    @budget.destroy
    head :no_content
  end

  private

  def setting_params
    params.require(:settings_entity).permit(:name, :total, :balance, :payment)
  end

end
