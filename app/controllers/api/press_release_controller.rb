class Api::PressReleaseController < ApiController
  before_action :set_press_release

  def show
    render json: @press_release
  end

  def update
    if @press_release.update(press_release_params)
      render json: @press_release
    else
      err(@press_release)
    end
  end

  private
    def set_press_release
      @press_release = PressRelease.first
    end

    def press_release_params
      params.require(:press_release).permit(:name, :presents, :album, :sub_header, :content, :embed_url)
    end
end
