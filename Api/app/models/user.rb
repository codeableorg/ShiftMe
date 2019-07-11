class User < ApplicationRecord
  has_many :requester_request, class_name: 'Request', foreign_key: 'requester_id'
  has_many :requested_request, class_name: 'Request', foreign_key: 'requested_id'
  has_secure_password
  has_secure_token

  
  def invalidate_token
    update(token: nil)
  end

  def self.valid_login?(email, password)
    user = find_by(email: email)
    user if user&.authenticate(password)
  end
end
