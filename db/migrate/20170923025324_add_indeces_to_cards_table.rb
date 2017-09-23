class AddIndecesToCardsTable < ActiveRecord::Migration[5.1]
  def change
    add_index :cards, :expansion_id
    add_index :cards, :card_hash_id
    add_index :cards, :card_type
  end
end
