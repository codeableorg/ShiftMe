Rails.application.routes.draw do
  scope '/api' do
  # sessions routes
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get 'schedules/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
