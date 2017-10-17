class CreateExpansions < ActiveRecord::Migration[5.1]
  def change
    create_table :expansions do |t|
      t.string :name, null: false
      t.string :symbol, null: false
      t.timestamps
    end
  end
end
