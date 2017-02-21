class Api::AlbumsController < ApiController
  def index
    render json: Album.all.order(created_at: :desc)
  end

  def create
    if album = Album.create(album_params)
      render json: album
    else 
      err(album)
    end
  end

  def destroy
    Album.find(params[:id]).destroy
  end

  private
    def album_params
      params.require(:album).permit(:uri, :title)
    end
end
