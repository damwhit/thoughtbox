class Link < ActiveRecord::Base
  belongs_to :user
  validates :name, presence: true

  validates :url, presence: true, url: true

end
