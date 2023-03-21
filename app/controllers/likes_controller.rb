class LikesController < ApplicationController
    def index
        @likes = Like.all
        render json: @likes, status: :ok
    end

    def show
        @like = Like.find(params[:id])
        render json: @like, status: :ok
    end

    def create
        @like = Like.create!(like_params)
        render json: @like, status: :created
    end

    def update
        @like = Like.find(params[:id])
        @like.update!(like_params)
    end

    def destroy
        @like = Like.find(params[:id])
        render json: {"Success": "Like Deleted Succesfully"}, status: :deleted
    end

    private

    def like_params
        params.permit(:id, :user_id, :song_id, :album_id, :playlist_id)
    end
end
