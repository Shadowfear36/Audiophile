class CommentsController < ApplicationController
    belongs_to :user
    belongs_to :album
    belongs_to :song
end
