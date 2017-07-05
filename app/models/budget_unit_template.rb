class BudgetUnitTemplate

  attr_accessor :savings, :in_credit

  def initialize
      @name           = 'no name'
      @savings        = false
      @income         = false
      @payment_method = false
      @in_credit      = nil
      @in_debt        = nil
  end

end