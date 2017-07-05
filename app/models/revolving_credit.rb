class RevolvingCredit < BudgetUnitTemplate

  def initialize(setting)
    super()
    @name = setting.name
    @in_credit = setting.balance
    @in_debt = setting.total - setting.balance
    @payment_method = true
  end

end