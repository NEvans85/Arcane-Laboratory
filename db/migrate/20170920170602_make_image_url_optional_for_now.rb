class MakeImageUrlOptionalForNow < ActiveRecord::Migration[5.1]
  def change
    remove_column :cards, :image_url, :string
    add_column :cards, :image_url, :string
  end
end
