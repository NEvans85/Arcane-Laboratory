# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170926164237) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.string "api_id", null: false
    t.string "name", null: false
    t.string "image_url", null: false
    t.string "full_type", null: false
    t.integer "cmc", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["api_id"], name: "index_cards_on_api_id", unique: true
    t.index ["cmc"], name: "index_cards_on_cmc"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "deck_id", null: false
    t.integer "comment_id"
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_comments_on_author_id"
    t.index ["comment_id"], name: "index_comments_on_comment_id"
    t.index ["deck_id"], name: "index_comments_on_deck_id"
  end

  create_table "deck_cards", force: :cascade do |t|
    t.string "card_api_id", null: false
    t.integer "deck_id", null: false
    t.integer "quantity", default: 0
    t.index ["card_api_id"], name: "index_deck_cards_on_card_api_id"
    t.index ["deck_id"], name: "index_deck_cards_on_deck_id"
  end

  create_table "decks", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.string "title", default: ""
    t.text "description", default: ""
    t.integer "upvotes", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_decks_on_creator_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
