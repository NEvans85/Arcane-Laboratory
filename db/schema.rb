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

ActiveRecord::Schema.define(version: 20170920031134) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "card_colors", force: :cascade do |t|
    t.string "card_id", null: false
    t.string "color_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_card_colors_on_card_id"
    t.index ["color_id"], name: "index_card_colors_on_color_id"
  end

  create_table "card_printings", force: :cascade do |t|
    t.string "card_id", null: false
    t.integer "expansion_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_card_printings_on_card_id"
    t.index ["expansion_id"], name: "index_card_printings_on_expansion_id"
  end

  create_table "cards", force: :cascade do |t|
    t.string "card_id", null: false
    t.string "name", null: false
    t.string "mana_cost"
    t.string "type", null: false
    t.string "rarity", null: false
    t.text "rules_text"
    t.text "flavor_text"
    t.string "power"
    t.string "toughness"
    t.string "loyalty"
    t.string "image_url", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "expansion_id"
    t.integer "cmc"
    t.index ["card_id"], name: "index_cards_on_card_id"
    t.index ["cmc"], name: "index_cards_on_cmc"
    t.index ["name"], name: "index_cards_on_name"
    t.index ["type"], name: "index_cards_on_type"
  end

  create_table "color_identities", force: :cascade do |t|
    t.integer "color_id"
    t.string "card_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_color_identities_on_card_id"
    t.index ["color_id"], name: "index_color_identities_on_color_id"
  end

  create_table "colors", force: :cascade do |t|
    t.string "name", null: false
    t.string "symbol", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
    t.integer "deck_id", null: false
    t.string "card_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_deck_cards_on_card_id"
    t.index ["deck_id"], name: "index_deck_cards_on_deck_id"
  end

  create_table "decks", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.string "title", null: false
    t.text "description", default: ""
    t.string "format", null: false
    t.integer "upvotes", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id"], name: "index_decks_on_creator_id"
    t.index ["format"], name: "index_decks_on_format"
    t.index ["title"], name: "index_decks_on_title"
  end

  create_table "expansions", force: :cascade do |t|
    t.string "name", null: false
    t.string "code", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["code"], name: "index_expansions_on_code"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
