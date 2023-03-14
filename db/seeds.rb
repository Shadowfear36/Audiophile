# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
user1 = User.create!(name: "Dylan", email: "Dylan@example.com", username: "DaRealDyl", password: "12345678", password_confirmation: "12345678")

album1 = Album.create!(name: "First Album", user_id: 1, likes: []) 
playlist1 = Playlist.create!(name: "First Playlist", user_id: 1, likes: [])
song1 = Song.create!(name: "First Song", user_id: 1, album_id: 1, likes: [])
playslistsong1 = PlaylistSong.create!(playlist_id: 1, song_id: 1)