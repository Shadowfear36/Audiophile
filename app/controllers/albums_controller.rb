class AlbumsController < ApplicationController

    def index
        @albums = Album.all
        render json: @albums, status: :ok
    end

    def show
        @album = Album.find(params[:id])
        render json: @album, serializer: AlbumsSerializer, status: :ok
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

    private

    def album_params
        params.permit(:id, :user_id, :likes, :name, :image)
    end
end
