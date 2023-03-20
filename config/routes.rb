Rails.application.routes.draw do
  resources :likes
  resources :playlist_songs
  resources :songs
  resources :playlists
  resources :albums
  resources :comments
  resources :users

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: 'sessions#create'

  
  # albums routes
  get '/albums/:id/songs', to: 'albums#songs'
  get '/albums/:id/likes', to: 'albums#likes'

  get '/songs/:id/link', to: 'songs#link'

  #playlist routes
  
  # Defines the root path route ("/")
  # root "articles#index"
end
