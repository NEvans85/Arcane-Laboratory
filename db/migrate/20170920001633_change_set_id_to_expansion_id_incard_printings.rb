class ChangeSetIdToExpansionIdIncardPrintings < ActiveRecord::Migration[5.1]
  def change
    rename_column :card_printings, :set_id, :expansion_id
  end
end
