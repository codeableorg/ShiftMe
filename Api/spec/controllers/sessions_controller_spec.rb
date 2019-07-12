require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
  before(:each) do
    User.destroy_all
    @user1 = User.create(name: 'Diego Cuevas', email: 'diego@gmail.com', password: '123456')
  end

  describe 'Testing login' do
    it 'unauthorized user' do
      post :create
      expect(response).to have_http_status(:unauthorized)
    end

    it 'authorized user' do
      post :create, params: { email: @user1.email, password: @user1.password }
      expect(response).to have_http_status(:ok)
    end
  end
end