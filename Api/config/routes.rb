Rails.application.routes.draw do
  scope '/api' do
  # sessions routes
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
  end
end
