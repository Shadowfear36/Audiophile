class SearchController < ApplicationController
    def results
        @term = params[:term]
        
        # Query each table for search results
        @users = User.where("username LIKE ?", "%#{@term}%")
          .select(:id, :username)
          .limit(10)
          .as_json(only: [:id, :username], methods: [:image_url])
        @songs = Song.where("name LIKE ?", "%#{@term}%")
          .select(:id, :name)
          .limit(10)
          .as_json(only: [:id, :name], methods: [:image_url, :audio_url])
        @playlists = Playlist.where("name LIKE ?", "%#{@term}%")
          .select(:id, :name)
          .limit(10)
          .as_json(only: [:id, :name], methods: [:image_url])
        @albums = Album.where("name LIKE ?", "%#{@term}%")
          .select(:id, :name)
          .limit(10)
          .as_json(only: [:id, :name], methods: [:image_url])
        # Combine search results
        @results = {
          users: @users,
          songs: @songs,
          playlists: @playlists,
          albums: @albums
        }
        
        render json: @results, status: :ok

      end
end