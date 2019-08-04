class NotificationsController < ApplicationController
  def index
    render json: { has_notifications: current_user.notify_user.where(status: "Unread").size > 0 }
  end

  def create
    current_user.notify_user.where(status: "Unread").update_all(status: "Read")
    render status: :ok
  end
end
