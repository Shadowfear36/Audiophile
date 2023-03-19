class UsersController < ApplicationController
    def index
      @users = User.all
      render json: @users, status: :ok
    end

    def show
      @user = User.find_by username: params[:id]
      render json: @user, status: :ok
    end

    def create
      @user = User.create!(user_params)
      if @user.save
        session[:user_id] = @user.id
        render json: @user, status: :created
      else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
      end
    end

    def update
      @user.update!(user_params)
      render json: @user, status: :updated
    end

    def destroy
      @user.destroy
      render json: { "Success": "User And Dependents Were Deleted!"}, status: :ok
    end

    def songs
      @user = User.find_by username: params[:username]
      @songs = @user.songs
      render json: @songs, status: :ok
    end

    def albums
      @user = User.find_by username: params[:username]
      @albums = @user.albums
      render json: @albums, status: :ok
    end

    def playlists
      @user = User.find_by username: params[:username]
      @playlists = @user.playlists
      render json: @playlists, status: :ok
    end

    private

    def user_params
      params.require(:user).permit(:name, :email,:username, :password, :password_confirmation, :gender, :age, :user_type )
    end

end
