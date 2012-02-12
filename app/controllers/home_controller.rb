class HomeController < ApplicationController
  def index
    @address = Address.new
    @addresses = Address.order(&:created_at).reverse
  end
end
