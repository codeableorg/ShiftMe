class SchedulesController < ApplicationController
  def index
    render json: Schedule.all
  end
end
