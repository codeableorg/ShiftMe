module Admin
  # app/controllers/admin/requests_controller.rb
  class RequestsController < Admin::AdminController
    def index
      render json: Request.manager
    end
  end
end
