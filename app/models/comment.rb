class Comment < ApplicationRecord
    has_one :user
    validates_presence_of :text
    has_one :album
    has_one :song
end
