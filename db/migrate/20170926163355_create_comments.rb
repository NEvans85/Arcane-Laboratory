class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.integer :deck_id, null: false
      t.integer :comment_id
      t.text :body, null: false

      t.timestamps
    end

    add_index :comments, :author_id
    add_index :comments, :deck_id
    add_index :comments, :comment_id
  end
end
