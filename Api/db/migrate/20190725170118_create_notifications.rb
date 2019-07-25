class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.references :notify_user
      t.references :request
      t.string :status, default: "Unread"

      t.timestamps
    end
  end
end
