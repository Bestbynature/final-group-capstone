class RemovePackagesTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :flights, :packages, :string
    remove_column :reserved_flights, :package_id, :integer
    drop_table :packages
  end
end
