class Post < ActiveRecord::Base
  # here is where i would put the dependent: :destroy, so it would destroy all instances of hearts if the post was destroyed
  has_many :hearts, dependent: :destroy
end
