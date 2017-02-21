class UsersController < ApplicationController
  def landing
    @role = current_user ? current_user.role : 'user'
  end
end
