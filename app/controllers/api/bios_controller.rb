class Api::BiosController < ApiController
  def index
    render json: Bio.first
  end

  def update
    if bio = Bio.first.update(body: params[:body])
      render json: bio
    else
      err(bio)
    end
  end
end
