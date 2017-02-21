class Api::ReleasesController < ApiController
  def index
    render json: Release.all.order(created_at: :desc)
  end

  def create
    if release = Release.create(release_params)
      render json: release
    else
      err(release)
    end
  end

  def destroy
    Release.find(params[:id]).destroy
  end

  private
   def release_params
     params.require(:release).permit(:body, :source)
   end
end
