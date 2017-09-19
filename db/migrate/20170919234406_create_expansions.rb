class CreateExpansions < ActiveRecord::Migration[5.1]
  def change
    create_table :expansions do |t|
      t.string :name, null: false
      t.string :code, null: false

      t.timestamps
    end

    add_index :expansions, :code
  end
end
