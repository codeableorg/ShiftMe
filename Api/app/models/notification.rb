class Notification < ApplicationRecord
  belongs_to :notify_user, class_name: 'User'
  belongs_to :request, class_name: 'Request'

  VALID_STATUS = {
    read: "Read",
    unread: "Unread"
  }
end
