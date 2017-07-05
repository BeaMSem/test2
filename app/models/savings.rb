class Savings < BudgetUnitTemplate

  def initialize(setting)
    super()
    @name = setting.name
    @savings        = true
    @payment_method = true
    @in_credit      = setting.total
  end

end