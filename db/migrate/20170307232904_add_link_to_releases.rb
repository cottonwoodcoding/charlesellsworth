class AddLinkToReleases < ActiveRecord::Migration[5.0]
  def change
    add_column :releases, :link, :string
  end
end
