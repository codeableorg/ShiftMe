class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.date :creationDate
      t.references :requester
      t.references :requested
      t.string :status, default: "Pending"
      t.date :date_Shift
      t.references :current_Shift
      t.references :requested_Shift

      t.timestamps
    end
  end
end
