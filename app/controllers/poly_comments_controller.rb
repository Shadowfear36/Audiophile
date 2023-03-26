class PolyCommentsController < ApplicationController
    # before_action :find_commentable

    def create
        @commentable = find_commentable(params[:commentable_type], params[:commentable_id])
      @comment = @commentable.poly_comments.build(comment_params)
  
      if @comment.save
        redirect_to @commentable, notice: 'Comment was successfully created.'
      else
        redirect_to @commentable, alert: 'Error creating comment.'
      end
    end
  
    private
  
    def find_commentable(commentable_type, commentable_id)
        case commentable_type
        when "Album"
          @commentable = Album.find(commentable_id)
        when "Song"
          @commentable = Song.find(commentable_id)
        when "Playlist"
          @commentable = Playlist.find(commentable_id)
        else
          nil
        end
      end
  
    def comment_params
      params.permit(:id, :user_id, :content, :commentable_type, :commentable_id)
    end
end
