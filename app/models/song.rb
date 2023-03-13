class Song < ApplicationRecord
    belongs_to :user
    belongs_to :album
    has_many :comments
    validates_presence_of :name
end
