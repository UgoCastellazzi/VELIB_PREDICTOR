class ChangeAvgTypes < ActiveRecord::Migration[6.0]
  def change
    change_column :stations, :avg0, :text
    change_column :stations, :avg2, :text
    change_column :stations, :avg4, :text
    change_column :stations, :avg6, :text
    change_column :stations, :avg8, :text
    change_column :stations, :avg10, :text
    change_column :stations, :avg12, :text
    change_column :stations, :avg14, :text
    change_column :stations, :avg16, :text
    change_column :stations, :avg18, :text
    change_column :stations, :avg20, :text
    change_column :stations, :avg22, :text
  end
end
