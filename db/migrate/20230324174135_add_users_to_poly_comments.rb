class AddUsersToPolyComments < ActiveRecord::Migration[7.0]
  def change
    add_column :poly_comments, :user_id, :integer
  end
end
