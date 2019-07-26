Rails.application.routes.draw do
  scope '/api' do
  # sessions routes
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    resources :users, only: [:show, :index] 
    resources :notifications
    scope 'schedule' do
      resources :workshifts, only: :index
      # get 'schedule/workshifts' # lista de workshifts#index
      resources :requests
      
      # post 'schedule/requests' # ca show request#show
      # patch 'schedule/requests/:id'mbio de workshifts request#create
      # get 'schedule/requests' # lista requests#index
      # get 'schedule/requests/:id' # # actualizar request#update
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
