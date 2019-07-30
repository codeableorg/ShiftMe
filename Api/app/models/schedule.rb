class Schedule < ApplicationRecord
  belongs_to :user

  def update_workshift(current_shift, requested_shift)
    requested_schedule.workShifts.map! do |work_shift|
      work_shift[:shift_id] = requested_shift if work_shift[:shift_id] == current_shift
    end
    requested_schedule.save!
  end
end
