class RestructureCardRelatedTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :card_colors
    drop_table :card_printings
    drop_table :cards
    drop_table :color_identities
    drop_table :colors
    drop_table :expansions
  end
end
