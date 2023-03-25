Rails.application.routes.draw do
  resources :playlist_songs
  resources :songs
  resources :playlists
  resources :albums
  resources :users

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: 'sessions#create'

  post '/poly_comments', to: 'poly_comments#create'
  post '/poly_likes', to: 'poly_likes#create'
  # albums routes
  get '/albums/:id/songs', to: 'albums#songs'
  get '/albums/:id/likes', to: 'albums#likes'

  get '/songs/:id/link', to: 'songs#link'
  get '/songs/search/:search', to: 'songs#song_search'
  #playlist routes

  get '/users/:id/albums', to: 'users#albums'
  get '/users/:id/likes', to: 'users#liked_songs'
  get '/users/:id/playlists', to: 'users#playlists'
  

  get '/search/:term', to: 'search#results'
  get 'search', to: 'search#results'

  get 'trending', to: 'trending#results'
  # Defines the root path route ("/")
  # root "articles#index"
end
