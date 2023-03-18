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
      audio_url = @song.audio_url
  
      # Check if the URL has expired
      if audio_url && Time.now.utc > @song.audio.metadata["goog-resumable-expiration"].to_time
        # Generate a new signed URL that is valid for 1 year
        audio_url = @song.audio.service_url(expires_in: 1.year)
  
        # Store the new signed URL in the song instance
        @song.update(audio: audio_url)
      end
  
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