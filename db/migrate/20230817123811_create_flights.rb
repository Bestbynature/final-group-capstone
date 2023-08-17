class CreateFlights < ActiveRecord::Migration[7.0]
  def change
    create_table :flights do |t|
      t.string :name
      t.string :picture
      t.boolean :reserved
      t.references :user, null: false, foreign_key: true
      t.decimal :base_price
      t.integer :available_slots

      t.timestamps
    end
  end
end
