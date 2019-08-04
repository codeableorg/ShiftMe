class Shift < ApplicationRecord
  has_many :current_Shift , class_name: 'Shift' , foreign_key: 'current_Shift_id'
  has_many :requested_Shift , class_name: 'Shift' , foreign_key: 'requested_Shift_id'

  VALID_TYPES = {
    morging: "morning",
    aftermoon: "aftermoon",
    night: "night"
  }
end
