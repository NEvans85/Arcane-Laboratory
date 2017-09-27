class AddFormatToDecks < ActiveRecord::Migration[5.1]
  def change
    add_column :decks, :format, :string
  end
end
