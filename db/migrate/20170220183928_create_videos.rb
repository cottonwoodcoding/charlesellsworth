class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :vid_id
      t.string :description
      t.integer :thumbnail, default: 0

      t.timestamps
    end
  end
end
