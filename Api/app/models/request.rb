class Request < ApplicationRecord
  belongs_to :requester, class_name: 'User'
  belongs_to :requested, class_name: 'User'
  belongs_to :current_Shift, class_name: 'Shift'
  belongs_to :requested_Shift, class_name: 'Shift'
  
  validate :validate_requester
  
  VALID_STATUSES = {
    pending: "pending",
    agree: "agree",
    disagree: "disagree",
    accepted: "accepted",
    rejected: "rejected"
  }
 def validate_requester
  if requester.id == requested.id
    errors.add(:requester, "Can't be request")
  end
 end

end
