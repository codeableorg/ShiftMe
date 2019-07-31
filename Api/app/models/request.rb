# app/models/request.rb
class Request < ApplicationRecord
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
  after_update :create_notification, :notify_change
  after_destroy :create_notification
  scope :manager, -> { where(status: STATUS[:agree]) }

  validates :status, inclusion: { in: STATUS.values, message: "%{value} is not a valid status" }
  validate :validate_requester
  

  def validate_requester
    errors.add(:requester, "Can't be request") if requester == requested
  end

  def create_notification
    Notification.create!(notify_user: requested, request: self)
  end
 
  def notify_change
    change_workshifts(self) if status == STATUS[:accepted]
  end

  def change_workshifts(request)
    current_shift_id = request.current_Shift_id
    requested_shift_id = request.requested_Shift_id
    month = Date::MONTHNAMES[request.date_Shift.month]

    requested_schedule = Schedule.find_by(month: month, user: request.requested)
    requested_schedule&.update_workshift(request.date_Shift.strftime("%Y/%m/%d"), requested_shift_id, current_shift_id)

    requester_schedule = Schedule.find_by(month: month, user: request.requester)
    requester_schedule&.update_workshift(request.date_Shift.strftime("%Y/%m/%d"), current_shift_id, requested_shift_id)
  end
end
