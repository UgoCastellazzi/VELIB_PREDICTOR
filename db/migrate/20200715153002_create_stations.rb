class CreateStations < ActiveRecord::Migration[6.0]
  def change
    create_table :stations do |t|
      t.integer :station_id
      t.string :name
      t.float :lat
      t.float :lon
      t.integer :capacity
      t.integer :code
      t.integer :avg0
      t.integer :avg4
      t.integer :avg8
      t.integer :avg12
      t.integer :avg16
      t.integer :avg20

      t.timestamps
    end
  end
end
