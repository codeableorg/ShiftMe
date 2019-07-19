class Request < ApplicationRecord
  belongs_to :requester, class_name: 'User'
  belongs_to :requested, class_name: 'User'
  belongs_to :current_Shift, class_name: 'Shift'
  belongs_to :requested_Shift, class_name: 'Shift'
  
  VALID_STATUSES = {
    pending: "pending",
    agree: "agree",
    disagree: "disagree",
    accepted: "accepted",
    rejected: "rejected"
  }

  # private
  #   def create_request
  #     Request.create(requester: requester, requested: recipient) if status == "agree"
  #   end


end
