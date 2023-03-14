class Comment < ApplicationRecord
    validates_presence_of :text
    
    has_one :user
    has_one :album
    has_one :song
end
