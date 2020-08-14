# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_14_073046) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "stations", force: :cascade do |t|
    t.string "station_id"
    t.string "name"
    t.float "lat"
    t.float "lon"
    t.integer "capacity"
    t.integer "code"
    t.text "avg0"
    t.text "avg4"
    t.text "avg8"
    t.text "avg12"
    t.text "avg16"
    t.text "avg20"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "avg2"
    t.text "avg6"
    t.text "avg10"
    t.text "avg14"
    t.text "avg18"
    t.text "avg22"
    t.integer "current_avg0"
    t.integer "current_avg2"
    t.integer "current_avg4"
    t.integer "current_avg6"
    t.integer "current_avg8"
    t.integer "current_avg10"
    t.integer "current_avg12"
    t.integer "current_avg14"
    t.integer "current_avg16"
    t.integer "current_avg18"
    t.integer "current_avg20"
    t.integer "current_avg22"
  end

end
