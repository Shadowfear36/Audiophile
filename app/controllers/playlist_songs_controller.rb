class PlaylistSongsController < ApplicationController
    def index
        @playlist_songs = PlaylistSong.all
        render json: @playlist_songs, status: :ok
    end

    def show
        @playlist_song = PlaylistSong.find(params[:id])
        render json: @playlist_song, status: :ok
    end

    def create
        @playlist_song = PlaylistSong.create!(playlist_song_params)
        render json: @playlist_song, status: :created
    end

    def update
        @playlist_song = PlaylistSong.find(params[:id])
        @playlist_song.update!(playlist_song_params)
        render json: @playlist_song, status: :updated
    end

    def destroy
        @playlist_song = PlaylistSong.find(params[:id])
        render json: {"Success": "Playlist Song Deleted Succesfully"}, status: :deleted
    end

    private

    def playlist_song_params
        params.permit(:id, :playlist_id, :song_id)
    end
end
