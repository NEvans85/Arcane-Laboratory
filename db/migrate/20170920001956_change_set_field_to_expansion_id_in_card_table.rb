class ChangeSetFieldToExpansionIdInCardTable < ActiveRecord::Migration[5.1]
  def change
    rename_column :cards, :set, :expansion_id
  end
end
