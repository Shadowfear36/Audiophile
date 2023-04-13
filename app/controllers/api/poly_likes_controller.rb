class Api::PolyLikesController < ApplicationController
    def create
        @likeable = find_likeable(params[:likeable_type], params[:likeable_id])
      @like = @likeable.poly_likes.build(like_params)
  
      if @like.save
        redirect_to @likeable, notice: 'Comment was successfully created.'
      else
        redirect_to @likeable, alert: 'Error creating comment.'
      end
    end
  
    private
  
    def find_likeable(likeable_type, likeable_id)
        case likeable_type
        when "Album"
          @likeable = Album.find(likeable_id)
        when "Song"
          @likeable = Song.find(likeable_id)
        when "Playlist"
          @likeable = Playlist.find(likeable_id)
        else
          nil
        end
      end
  
    def like_params
      params.permit(:id, :user_id, :likeable_type, :likeable_id)
    end
end
