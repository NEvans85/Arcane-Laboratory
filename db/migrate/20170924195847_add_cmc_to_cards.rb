class AddCmcToCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :cmc, :integer
    add_index :cards, :cmc
  end

end
