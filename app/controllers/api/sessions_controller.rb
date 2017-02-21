class Api::SessionsController < Devise::SessionsController
  skip_before_action :verify_authenticity_token
  respond_to :json

  def create
    begin
      self.resource = warden.authenticate(auth_options)
      sign_in(resource_name, resource)
      render json: { role: resource.role }
    rescue => e
      render json: { errors: 'Email or Password Incorrect. Try Again.' }, status: 401
    end
  end

  def destroy
    super
  end

end
