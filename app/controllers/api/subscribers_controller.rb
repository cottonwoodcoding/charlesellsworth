class Api::SubscribersController < ApiController
  def index
    render json: Subscriber.all
  end

  def create
    subscriber = Subscriber.find_by(email: params[:subscriber][:email])
    unless subscriber
      Subscriber.create(sub_params)
    end
  end

  private
    def sub_params
      params.require(:subscriber).permit(:email)
    end
end
