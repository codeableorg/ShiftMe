require 'rails_helper'

RSpec.describe SchedulesController, type: :controller do

  before do
    @schedule = Schedule.create(
      month: "Julio",
      user_id: 1,
      workShifts: [
        {
          date:"01-07-19",
          shift_id: 4 # off
        },
        {
          date: "02-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "03-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "04-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "05-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "06-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "07-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "08-07-19",
          shift_id: 4 # off
        },
        {
          date: "09-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "10-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "11-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "12-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "13-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "14-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "15-07-19",
          shift_id: 4 # off
        },
        {
          date: "16-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "17-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "18-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "19-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "20-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "21-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "22-07-19",
          shift_id: 4 # off
        },
        {
          date: "23-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "24-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "25-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "26-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "27-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "28-07-19",
          shift_id: 1 # mañana
        },
        {
          date: "29-07-19",
          shift_id: 4 # off
        },
        {
          date: "30-07-19",
          shift_id:  1 # mañana
        },
        {
          date: "31-07-19",
          shift_id:  1 # mañana
        }
      ]
    )
  end

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'render json with all schedules' do
      get :index
      schedules = JSON.parse(response.body)
      expect(schedules.size).to eq 1
    end
  end 

end
