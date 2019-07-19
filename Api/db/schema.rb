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

ActiveRecord::Schema.define(version: 2019_07_18_203930) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "requests", force: :cascade do |t|
    t.date "creationDate"
    t.bigint "requester_id"
    t.bigint "requested_id"
    t.string "rol"
    t.string "status", default: "pending"
    t.date "date_Shift"
    t.bigint "current_Shift_id"
    t.bigint "requested_Shift_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["current_Shift_id"], name: "index_requests_on_current_Shift_id"
    t.index ["requested_Shift_id"], name: "index_requests_on_requested_Shift_id"
    t.index ["requested_id"], name: "index_requests_on_requested_id"
    t.index ["requester_id"], name: "index_requests_on_requester_id"
  end

  create_table "schedules", force: :cascade do |t|
    t.string "month"
    t.bigint "user_id"
    t.json "workShifts", array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_schedules_on_user_id"
  end

  create_table "shifts", force: :cascade do |t|
    t.string "shift_type"
    t.time "startHours"
    t.time "endHours"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "rol"
    t.string "name"
    t.string "token"
    t.string "lastName"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["token"], name: "index_users_on_token"
  end

  add_foreign_key "schedules", "users"
end
