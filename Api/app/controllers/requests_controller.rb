class RequestsController < ApplicationController
  def index
    render json: Request.all
  end

  def create 
    @request = Request.new(request_params)
    render json:  @request
  end

  private 
  def request_params
    params.require(:request).permit(:creationDate, :rol, :status, :date_Shift, :requester_id, :requested_id)
  end
end
