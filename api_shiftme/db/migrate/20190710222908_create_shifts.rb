class CreateShifts < ActiveRecord::Migration[5.2]
  def change
    create_table :shifts do |t|
      t.string :type
      t.time :startHours
      t.time :endHours

      t.timestamps
    end
  end
end
