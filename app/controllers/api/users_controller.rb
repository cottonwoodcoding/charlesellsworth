class Api::UsersController < ApplicationController
  def info
    if current_user
      render json: { role: current_user.role }
    else
      render json: {}
    end
  end
end
