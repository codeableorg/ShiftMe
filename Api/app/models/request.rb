class Request < ApplicationRecord
  belongs_to :requester, class_name: 'User'
  belongs_to :requested, class_name: 'User'
  belongs_to :current_Shift, class_name: 'Shift'
  belongs_to :requested_Shift, class_name: 'Shift'
end
