class AddressesController < ApplicationController
  def create
    respond_to do |format|
      format.js {
        flash.now[:success] = "Just sync." if Address.sync(params[:urls])
      }
    end
  end
end
