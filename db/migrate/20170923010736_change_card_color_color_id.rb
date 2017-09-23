class ChangeCardColorColorId < ActiveRecord::Migration[5.1]
  def change
    remove_column :card_colors, :color_id, :string
    add_column :card_colors, :color_id, :integer
  end
end
