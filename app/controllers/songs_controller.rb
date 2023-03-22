class SongsController < ApplicationController

    def index
      @songs = Song.all
      render json: @songs, status: :ok
    end
  
    def create
        @song = Song.create!(song_params)
      
        render json: @song, status: :ok
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def show
      @song = Song.find(params[:id])
      render json: @song, serializer: SongsSerializer, status: :ok
    end
  
    def delete
      @song = Song.find(params[:id])
      @song.destroy
      render json: { "Success": "Song Deleted" }, status: :deleted
    end

    def link
      @song = Song.find(params[:id])
      @url = @song.audio_url
      render json: @url, status: :ok
    end

    # def song_search
    #   @songs = Songs.find_by_fuzzy_name(params[:search], :limit => 5)
    #   render json: @songs, status: :ok
    # end
  
    private
  
    def song_params
      params.permit(:name, :album_id, :user_id, :likes, :audio, :artist, :image)
    end
  end