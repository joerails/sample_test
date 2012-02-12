class HomeController < ApplicationController
  def index
    @address = Address.new
  end
end
