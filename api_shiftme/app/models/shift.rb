class Shift < ApplicationRecord
  has_many :current_Shift_shift , class_name: 'Shift' , foreign_key: 'current_Shift_id'
  has_many :requested_Shift_shift , class_name: 'Shift' , foreign_key: 'requested_Shift_id'
end
