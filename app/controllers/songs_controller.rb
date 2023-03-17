class SongsController < ApplicationController
    def index
      @songs = Song.all
      render json: @songs.as_json(methods: :audio_url), status: :ok
    end
  
    def create
      ActiveRecord::Base.transaction do
        @song = Song.create!(song_params)
        @song.audio.attach(params[:audio])
      end
  
      render json: @song.as_json(methods: :audio_url), status: :created
    rescue ActiveRecord::RecordInvalid => e 
      render json: { errors: e.record.errors.full_messages }, status: :unprocessable
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
  
    private 
  
    def song_params
      params.permit(:name, :album_id, :user_id, :likes, :audio)
    end
  end