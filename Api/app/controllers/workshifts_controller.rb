class WorkshiftsController < ApplicationController
  def index
    render json: Schedule.order(id: :asc)
  end
end
