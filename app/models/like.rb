class Like < ApplicationRecord
    belongs_to :user
    belongs_to :album
    belongs_to :song
    belongs_to :playlist
end
