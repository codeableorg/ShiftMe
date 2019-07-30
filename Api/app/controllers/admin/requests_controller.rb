module Admin
  # app/controllers/admin/requests_controller.rb
  class RequestsController < Admin::AdminController
    before_action :set_request, only: :update

    def index
      render json: Request.manager
    end

    def update
      @request.update(status: params[:status])
      if @request.save
        render json: @request, status: :ok
      else
        render json: @request.errors, status: :bad_reques
      end
    end

    private

    def set_request
      @request = Request.find(params[:id])
      return render_unauthorized('Access Denied') if @request.requested == current_user
    end
  end
end
