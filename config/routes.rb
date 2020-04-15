Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :users

  # get '/favorites', to: 'users#show'
  post '/favorites', to: 'users#add_favorite'
  resources :stories
  resources :comments

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
