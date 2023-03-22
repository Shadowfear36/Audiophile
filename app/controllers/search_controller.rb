class SearchController < ApplicationController
    def results
        @term = params[:term]
        
        # Query each table for search results
        @users = User.where("name LIKE ?", "%#{@term}%")
        @songs = Song.where("name LIKE ?", "%#{@term}%")
        @playlists = Playlist.where("name LIKE ?", "%#{@term}%")
        @albums = Album.where("name LIKE ?", "%#{@term}%")
        
        # Combine search results
        @results = {
          users: @users,
          songs: @songs,
          playlists: @playlists,
          albums: @albums
        }
        
        render json: @results
      end
end
