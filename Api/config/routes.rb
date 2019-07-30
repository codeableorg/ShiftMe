Rails.application.routes.draw do
  scope '/api' do
    # sessions routes
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    resources :users, only: %i[show index]
    resources :notifications
    scope 'schedule' do
      resources :workshifts, only: :index
      resources :requests
    end

    namespace 'admin' do
      resources :requests, only: :index
    end
  end
end
