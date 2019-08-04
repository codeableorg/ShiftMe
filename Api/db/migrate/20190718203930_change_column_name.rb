class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :shifts, :type, :shift_type
  end
end
