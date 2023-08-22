class AddFlightIdToPackages < ActiveRecord::Migration[7.0]
  def change
    remove_column :packages, :flight_id, :integer
    add_reference :packages, :flight, foreign_key: true
  end
end
