class Schedule < ApplicationRecord
  belongs_to :user

  def update_workshift(date, current_shift, requested_shift)
    work_shifts = workShifts.map do |work_shift|
      work_shift['shift_id'] = requested_shift if work_shift['shift_id'] == current_shift && work_shift['date'] == date
      work_shift
    end
    update!(workShifts: work_shifts)
  end
end
