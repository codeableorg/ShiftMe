class CreateSchedules < ActiveRecord::Migration[5.2]
  def change
    create_table :schedules do |t|
      t.string :month
      t.references :user, foreign_key: true
      t.string :workShifts, array: true

      t.timestamps
    end
  end
end
