class ApiController < ActionController::Base
  # TODO: figure out CSRF token issues
  # protect_from_forgery with: :null_session

  def err(model)
    render json: {errors: model.errors.full_messages.join(',')}, status: :unprocessable_entity
  end

end
