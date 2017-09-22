class CHangeCardIdInCarDTable < ActiveRecord::Migration[5.1]
  def change
    remove_column :cards, :card_id, :string
    add_column :cards, :card_hash_id, :string
  end
end
