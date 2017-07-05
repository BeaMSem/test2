class Income < BudgetUnitTemplate


  def self.income

  end


  def initialize(setting)
    super()
    @name = 'budget'
    @in_credit = setting.total
    @payment_method = true
    @income = true
  end

end
