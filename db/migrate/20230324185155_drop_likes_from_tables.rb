class DropLikesFromTables < ActiveRecord::Migration[7.0]
  def change
    remove_column :albums, :likes
    remove_column :songs, :likes
    remove_column :playlists, :likes

  end
end
