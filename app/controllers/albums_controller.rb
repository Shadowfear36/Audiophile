class AlbumsController < ApplicationController

    def index
        @albums = Album.all
        render json: @albums, status: :ok
    end

    def show
        @album = Album.find(params[:id])
        render json: @album, status: :ok
    end

    def create
        @album = Album.create!(album_params)
        render json: @album, status: :created
    end

    def update
        @album = Album.find(params[:id])
        @album.update!(album_params)
        render json: @album, status: :updated
    end

    def destroy
        @album = Album.find(params[:id])
        render json: {"Success": "Album Deleted Succesfully"}, status: :deleted
    end

    def songs
        @album = Album.find(params[:id])
        @songs = @album.songs
        render json: @songs, status: :ok
    end

    def likes
        @album = Album.find(params[:id])
        @likes = Album.likes.length
        render json: @likes, status: :ok
    end

    private

    def album_params
        params.permit(:id, :user_id, :likes :image)
    end
end
