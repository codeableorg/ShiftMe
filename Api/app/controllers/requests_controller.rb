class RequestsController < ApplicationController

  def index
    render json: current_user.requester_request + current_user.requested_request
  end

  def update
    @request = Request.find_by(id: params[:id])
    if current_user.id != @request.requested_id
      render json: { errors: "You don't have access!!" }
    else 
      @request.status = params[:status]
      @request.save
      render json: @request
    end
  end
  
  def destroy
    @request = Request.find_by(id: params[:id])
    if current_user.id != @request.requested_id
      render json: { errors: "You don't have access!!" }
    else 
      @request.status = "Cancel"
      @request.save
      render json: @request
    end
  end

  private 
  def request_params
    params.require(:rol).permit(:creationDate, :date_Shift, :requester_id, :requested_id, :current_Shift_id, :requested_Shift_id )
  end
end
