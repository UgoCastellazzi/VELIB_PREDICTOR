class AddAvg2ToStations < ActiveRecord::Migration[6.0]
  def change
    add_column :stations, :avg2, :integer
    add_column :stations, :avg6, :integer
    add_column :stations, :avg10, :integer
    add_column :stations, :avg14, :integer
    add_column :stations, :avg18, :integer
    add_column :stations, :avg22, :integer
  end
end
