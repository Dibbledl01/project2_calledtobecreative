class Heart < ActiveRecord::Base
  belongs_to :post
  # not sure you would need this validation here. Assuming, you could only create a heart if there was a post
  validates :post_id, presence: true
end
