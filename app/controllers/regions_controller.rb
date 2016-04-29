class RegionsController < ApplicationController

  # GET /posts
  # GET /posts.json
  def index
    @regions = Region.all
  end
end
