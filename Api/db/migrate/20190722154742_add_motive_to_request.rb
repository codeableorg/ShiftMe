class AddMotiveToRequest < ActiveRecord::Migration[5.2]
  def change
    add_column :requests, :motive, :string
  end
end
