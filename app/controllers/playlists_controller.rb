class PlaylistsController < ApplicationController

    def index
        @playlists = Playlist.all
        render json: @playlists, status: :ok
    end

    def show
        @playlist = Playlist.find(params[:id])
        render json: @playlist, status: :ok
    end

    def create
        @playlist = Playlist.create!(playlist_params)
        render json: @playlist, status: :created
    end

    def update
        @playlist = Playlist.find(params[:id])
        @playlist.update!(playlist_params)
        render json: @playlist, status: :updated
    end

    def destroy
        @playlist = Playlist.find(params[:id])
        @playlist.destroy
        render json: {"Success": "Playlist Deleted Succesfully"}, status: :deleted
    end

    def songs
        @playlist = Playlist.find(params[:id])
        @songs = @playlist.songs
        render json: @songs, status: :ok
    end

    def likes
        @playlist = Playlist.find(params[:id])
        @likes = @playlist.likes.length
        render json: @likes, status: :ok
    end

    private

    def playlist_params
        params.permit(:id, :name, :user_id, :likes)
    end
end
