# app/controllers/admin/admin_controller.rb
class Admin::AdminController < ApplicationController
  before_action :access_control

  private

  def access_control
    render_unauthorized('Access denied') unless current_user.admin?
  end
end
