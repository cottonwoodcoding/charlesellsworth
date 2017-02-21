class Api::VideosController < ApiController
  def index
    render json: Video.all.order(created_at: :desc)
  end

  def create
    if video = Video.create(video_params)
      render json: video
    else
      err(video)
    end
  end

  def destroy
    Video.find(params[:id]).destroy
  end

  private
    def video_params
      params.require(:video).permit(:vid_id, :description)
    end
end
