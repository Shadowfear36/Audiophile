class SongsController < ApplicationController
    def index
      @songs = Song.all
      render json: @songs.as_json(methods: :audio_url), status: :ok
    end
  
    def create
        @song = Song.create!(song_params)
      
        render json: SongSerializer.new(@song).serializable_hash[:data][:attributes]
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
  
    def show
      @song = Song.find(params[:id])
      render json: @song.as_json(methods: :audio_url), status: :ok
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
  
    private
  
    def song_params
      params.permit(:name, :album_id, :user_id, :likes, :audio)
    end
  end