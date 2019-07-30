class Request < ApplicationRecord
  has_many :request_notification, class_name: 'Notification', foreign_key: 'request_id'
  belongs_to :requester, class_name: 'User'
  belongs_to :requested, class_name: 'User'
  belongs_to :current_Shift, class_name: 'Shift'
  belongs_to :requested_Shift, class_name: 'Shift'

  after_create :create_notification
  validate :validate_requester
  
  VALID_STATUS = {
    pending: "Pending",
    agree: "Agree",
    disagree: "Disagree",
    accepted: "Accepted",
    rejected: "Rejected",
    cancel: "Cancel"
  }
  def validate_requester
    if requester.id == requested.id
      errors.add(:requester, "Can't be request")
    end
  end

  def create_notification
    Notification.create!(notify_user: requested, request: self)
  end

  
end
