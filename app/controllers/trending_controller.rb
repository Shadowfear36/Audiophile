class TrendingController < ApplicationController

    def results
    @albums = Album.select("albums.*, COUNT(poly_likes.id) AS likes, COUNT(poly_comments.id) AS comments")
    .joins("LEFT JOIN poly_likes ON poly_likes.likeable_id = albums.id AND poly_likes.likeable_type = 'Album'")
    .joins("LEFT JOIN poly_comments ON poly_comments.commentable_id = albums.id AND poly_comments.commentable_type = 'Album'")
    .group("albums.id")
    .order("likes DESC, comments DESC")
    .limit(10)
    .as_json(only: [:id, :name], methods: [:likes, :comments, :image_url])

    @songs = Song.select("songs.*, COUNT(poly_likes.id) AS likes, COUNT(poly_comments.id) AS comments")
    .joins("LEFT JOIN poly_likes ON poly_likes.likeable_id = songs.id AND poly_likes.likeable_type = 'Song'")
    .joins("LEFT JOIN poly_comments ON poly_comments.commentable_id = songs.id AND poly_comments.commentable_type = 'Song'")
    .group("songs.id")
    .order("likes DESC, comments DESC")
    .limit(10)
    .as_json(only: [:id, :name], methods: [:likes, :comments, :image_url, :artist, :audio_url])

    @playlists = Playlist.select("playlists.*, COUNT(poly_likes.id) AS likes, COUNT(poly_comments.id) AS comments")
    .joins("LEFT JOIN poly_likes ON poly_likes.likeable_id = playlists.id AND poly_likes.likeable_type = 'Playlist'")
    .joins("LEFT JOIN poly_comments ON poly_comments.commentable_id = playlists.id AND poly_comments.commentable_type = 'Playlist'")
    .group("playlists.id")
    .order("likes DESC, comments DESC")
    .limit(10)
    .as_json(only: [:id, :name], methods: [:likes, :comments, :image_url, :artist])


     render json: {albums: @albums, songs: @songs, playlists: @playlists}, status: :ok
    end
end
