class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :rol
      t.string :name
      t.string :lastName
      t.string :email
      t.string :password

      t.timestamps
    end
  end
end
