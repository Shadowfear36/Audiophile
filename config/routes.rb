Rails.application.routes.draw do
  resources :songs
  resources :playlists
  resources :albums
  resources :comments
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
