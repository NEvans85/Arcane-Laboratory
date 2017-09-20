class ChangeDataTypeOfExpansionIdInCardsTableToInteger < ActiveRecord::Migration[5.1]
  def change
    remove_column :cards, :expansion_id, :string
    add_column :cards, :expansion_id, :integer
  end
end
