class Api::EventsController < ApiController
  before_action :set_event, only: [:show, :update, :destroy]

  def index
    render json: Event.all
  end

  def show
    render json: @event
  end

  def create
    if @event = Event.create(event_params)
      render json: @event
    else
      render err(@event)
    end
  end

  def update
    if @event.update(event_params)
      render json: @event
    else
      render err(@event)
    end
  end

  def destroy
    @event.destroy
  end

  private
    def set_event
      @event = Event.find(params[:id])
    end

    def event_params
      params.require(:event).permit(:event_date, :venue, :location, :link)
    end
end
