class User < ApplicationRecord
  has_many :requester_request, class_name: 'Request', foreign_key: 'requester_id'
  has_many :requested_request, class_name: 'Request', foreign_key: 'requested_id'
  has_many :notify_user, class_name: 'Notification', foreign_key: 'notify_user_id'
  has_many :schedules
  has_secure_password
  has_secure_token

  
  def invalidate_token
    update(token: nil)
  end

  def self.valid_login?(email, password)
    user = find_by(email: email)
    user if user&.authenticate(password)
  end

  def admin?
    rol == 'Supervisor'
  end
end

