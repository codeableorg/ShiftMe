# app/models/request.rb
class Request < ApplicationRecord
  ROLES = {
    manager: 'admin',
    user: 'FrontDesk'
  }.freeze

  STATUS = {
    pending: 'Pending',
    agree: 'Agree',
    disagree: 'Disagree',
    accepted: 'Accepted',
    rejected: 'Rejected',
    cancel: 'Cancel'
  }.freeze

  has_many :request_notification, class_name: 'Notification', foreign_key: 'request_id'
  belongs_to :requester, class_name: 'User'
  belongs_to :requested, class_name: 'User'
  belongs_to :current_Shift, class_name: 'Shift'
  belongs_to :requested_Shift, class_name: 'Shift'

  after_create :create_notification
  scope :manager, -> { where(rol: ROLES[:manager], status: STATUS[:pending]) }

  validates :status, inclusion: { in: STATUS, message: "%{value} is not a valid status" }
  validate :validate_requester
  after_update :notify_admin

  def validate_requester
    errors.add(:requester, "Can't be request") if requester == requested
  end

  def create_notification
    Notification.create!(notify_user: requested, request: self)
  end

  
  def notify_admin
    return unless rol == 'FrontDesk' && status == STATUS[:agree]

    manager = User.find_by_rol('Supervisor')
    new_request = dup
    new_request.update(
      requested: manager,
      rol: ROLES[:manager],
      status: STATUS[:pending]
    )
    new_request.save!
  end
end
