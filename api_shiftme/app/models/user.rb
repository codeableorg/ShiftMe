class User < ApplicationRecord
  has_many :requester_request, class_name: 'Request', foreign_key: 'requester_id'
  has_many :requested_request, class_name: 'Request', foreign_key: 'requested_id'
end
