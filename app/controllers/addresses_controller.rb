class AddressesController < ApplicationController
  def create
    respond_to do |format|
      format.html
      format.js
    end
  end
end
