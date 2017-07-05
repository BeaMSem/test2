class BudgetEntitiesController < ApplicationController

  def index
    @categories = Category.all
  end

  def create

  end

  # def update
  #   @setting = SettingsEntity.find(params[:id])
  #   if  @setting.update(setting_params)
  #     render json: @setting
  #   else
  #     render json: @setting.errors, status: :unprocessable_entity
  #   end
  # end
  #
  # def destroy
  #   @setting = SettingsEntity.find(params[:id])
  #   @setting.destroy
  #   head :no_content
  # end
  #
  # private
  #
  # def budget_entities_params
  #   params.require(:settings_entity).permit(:name, :in_credit, :In_debt, :savings, :payment_method)
  # end


end
