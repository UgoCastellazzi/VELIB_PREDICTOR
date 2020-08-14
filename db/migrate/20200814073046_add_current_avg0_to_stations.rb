class AddCurrentAvg0ToStations < ActiveRecord::Migration[6.0]
  def change
    add_column :stations, :current_avg0, :integer
    add_column :stations, :current_avg2, :integer
    add_column :stations, :current_avg4, :integer
    add_column :stations, :current_avg6, :integer
    add_column :stations, :current_avg8, :integer
    add_column :stations, :current_avg10, :integer
    add_column :stations, :current_avg12, :integer
    add_column :stations, :current_avg14, :integer
    add_column :stations, :current_avg16, :integer
    add_column :stations, :current_avg18, :integer
    add_column :stations, :current_avg20, :integer
    add_column :stations, :current_avg22, :integer
  end
end
