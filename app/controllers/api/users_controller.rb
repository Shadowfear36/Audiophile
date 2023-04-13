class Api::UsersController < ApplicationController
    skip_before_action :authenticate_user

    def index
      @users = User.all
      render json: @users, status: :ok
    end

    def show
      @user = User.find_by(username: params[:id])
      render json: @user, serializer: UsersSerializer, status: :ok
    end


    def create
      @user = User.create!(user_params)
      if @user.valid?
        session[:user_id] = @user.id
        render json: @user, status: :created
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def update
      @user = User.find(params[:id])
      @user.update(user_params)
      render json: @user, status: :ok
    end

    def destroy
      @user = User.find(params[:id])
      @user.destroy
      render json: { "Success": "User And Dependents Were Deleted!"}, status: :ok
    end

    def albums
      @user = User.find(params[:id])
      @albums = @user.albums
      render json: @albums, status: :ok
    end

    def playlists
      @user = User.find(params[:id])
      @playlists = @user.playlists
      render json: @playlists, status: :ok
    end

    def liked_songs
      @user = User.find_by_username(params[:id])
      @songs = @user.songs_liked
      render json: @songs, each_serializer: SongsSerializer, status: :ok
    end

    private

    def user_params
      params.permit(:id, :name, :email,:username, :password, :password_confirmation, :gender, :age, :user_type, :image )
    end

end
